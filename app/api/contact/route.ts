import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL, getServiceProductBySlug, services } from "@/data";

// Ensure the route is dynamically generated
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_RATE_LIMIT_ENTRIES = 10_000;
const RATE_LIMIT_CLEANUP_INTERVAL_MS = 60_000;
const MAX_REQUEST_BYTES = 16_384;
const INPUT_LIMITS = {
	name: 80,
	email: 254,
	message: 2_000,
	service: 100,
} as const;

type RateLimitEntry = { count: number; resetAt: number };

// This is a bounded, best-effort safeguard for a single runtime instance. A
// shared TTL store is still required for strict rate limiting across multiple
// serverless instances.
const rateLimitStore = new Map<string, RateLimitEntry>();
let lastRateLimitCleanup = 0;

const getClientIp = (req: NextRequest) =>
	req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
	req.headers.get("x-real-ip") ||
	"unknown";

const checkRateLimit = (key: string) => {
	const now = Date.now();

	if (
		now - lastRateLimitCleanup >= RATE_LIMIT_CLEANUP_INTERVAL_MS ||
		rateLimitStore.size >= MAX_RATE_LIMIT_ENTRIES
	) {
		rateLimitStore.forEach((entry, storedKey) => {
			if (entry.resetAt <= now) {
				rateLimitStore.delete(storedKey);
			}
		});
		lastRateLimitCleanup = now;
	}

	const current = rateLimitStore.get(key);

	if (!current || current.resetAt <= now) {
		if (rateLimitStore.size >= MAX_RATE_LIMIT_ENTRIES) {
			const oldestKey = rateLimitStore.keys().next().value;
			if (oldestKey) {
				rateLimitStore.delete(oldestKey);
			}
		}

		const resetAt = now + RATE_LIMIT_WINDOW_MS;
		rateLimitStore.set(key, { count: 1, resetAt });
		return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt };
	}

	if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
		return { allowed: false, remaining: 0, resetAt: current.resetAt };
	}

	current.count += 1;
	return {
		allowed: true,
		remaining: RATE_LIMIT_MAX_REQUESTS - current.count,
		resetAt: current.resetAt,
	};
};

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");

const isValidEmail = (email: string) =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const containsUnsafeHeaderCharacters = (value: string) =>
	/[\u0000-\u001f\u007f]/.test(value);

// Named export for the POST method
export async function POST(req: NextRequest) {
	const rateLimit = checkRateLimit(getClientIp(req));
	const rateLimitHeaders = {
		"Cache-Control": "no-store",
		"X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
		"X-RateLimit-Remaining": String(rateLimit.remaining),
		"X-RateLimit-Reset": String(Math.ceil(rateLimit.resetAt / 1000)),
	};

	if (!rateLimit.allowed) {
		return NextResponse.json(
			{ message: "Too many requests. Please try again later." },
			{
				status: 429,
				headers: {
					...rateLimitHeaders,
					"Retry-After": String(
						Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000))
					),
				},
			}
		);
	}

	const contentType = req.headers.get("content-type")?.split(";", 1)[0].trim();
	if (contentType?.toLowerCase() !== "application/json") {
		return NextResponse.json(
			{ message: "Content-Type must be application/json." },
			{ status: 415, headers: rateLimitHeaders }
		);
	}

	const contentLengthHeader = req.headers.get("content-length");
	const declaredLength = Number(contentLengthHeader);
	if (
		contentLengthHeader !== null &&
		(!Number.isSafeInteger(declaredLength) || declaredLength < 0)
	) {
		return NextResponse.json(
			{ message: "Invalid Content-Length header." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	if (contentLengthHeader !== null && declaredLength > MAX_REQUEST_BYTES) {
		return NextResponse.json(
			{ message: "Request body is too large." },
			{ status: 413, headers: rateLimitHeaders }
		);
	}

	let body: Record<string, unknown>;

	try {
		const rawBody = await req.text();
		if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
			return NextResponse.json(
				{ message: "Request body is too large." },
				{ status: 413, headers: rateLimitHeaders }
			);
		}
		body = JSON.parse(rawBody) as Record<string, unknown>;
	} catch {
		return NextResponse.json(
			{ message: "Invalid request body." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	const name = typeof body.name === "string" ? body.name.trim() : "";
	const email = typeof body.email === "string" ? body.email.trim() : "";
	const message = typeof body.message === "string" ? body.message.trim() : "";
	const service = typeof body.service === "string" ? body.service.trim() : "";

	// Basic validation
	if (!name || !email || !message) {
		return NextResponse.json(
			{ message: "All fields are required." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	if (
		name.length > INPUT_LIMITS.name ||
		email.length > INPUT_LIMITS.email ||
		message.length > INPUT_LIMITS.message ||
		service.length > INPUT_LIMITS.service
	) {
		return NextResponse.json(
			{ message: "One or more fields exceed the allowed length." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	if (!isValidEmail(email)) {
		return NextResponse.json(
			{ message: "Please provide a valid email address." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	if (
		containsUnsafeHeaderCharacters(name) ||
		containsUnsafeHeaderCharacters(email) ||
		containsUnsafeHeaderCharacters(service)
	) {
		return NextResponse.json(
			{ message: "One or more fields contain invalid characters." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	const selectedProduct = service ? getServiceProductBySlug(service) : undefined;
	const selectedService = service
		? services.find((item) => item.title === service)
		: undefined;
	const selectedInterestLabel =
		selectedProduct?.title ?? selectedService?.title ?? "";

	if (service && !selectedInterestLabel) {
		return NextResponse.json(
			{ message: "Please select a valid product or service." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
		return NextResponse.json(
			{ message: "Contact form is not configured." },
			{ status: 500, headers: rateLimitHeaders }
		);
	}

	const configuredSmtpPort = Number(process.env.SMTP_PORT ?? 587);
	const smtpPort =
		Number.isInteger(configuredSmtpPort) &&
		configuredSmtpPort > 0 &&
		configuredSmtpPort <= 65_535
			? configuredSmtpPort
			: 587;
	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeMessage = escapeHtml(message);
	const safeService = selectedInterestLabel
		? escapeHtml(selectedInterestLabel)
		: "";

	// Nodemailer transporter configuration
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST ?? "smtp.gmail.com",
		port: smtpPort,
		secure: smtpPort === 465,
		connectionTimeout: 10_000,
		greetingTimeout: 10_000,
		socketTimeout: 20_000,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	try {
		// Send the email
		await transporter.sendMail({
			from: process.env.SMTP_USER,
			replyTo: email,
			to: CONTACT_EMAIL,
			subject: `New Portfolio message from ${name}${
				selectedInterestLabel ? ` - ${selectedInterestLabel}` : ""
			}`,
			text: [
				"New Portfolio Contact",
				`Name: ${name}`,
				`Email: ${email}`,
				selectedInterestLabel
					? `Product or Service of Interest: ${selectedInterestLabel}`
					: "",
				"",
				"Message:",
				message,
			]
				.filter(Boolean)
				.join("\n"),
			html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
				<h2 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Portfolio Contact</h2>
				<div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<p><strong style="color: #555;">Name:</strong> <span style="color: #333;">${safeName}</span></p>
					<p><strong style="color: #555;">Email:</strong> <span style="color: #333;">${safeEmail}</span></p>
					${
						safeService
							? `<p><strong style="color: #555;">Product or Service of Interest:</strong> <span style="color: #7c3aed; font-weight: 500;">${safeService}</span></p>`
							: ""
					}
					<p><strong style="color: #555;">Message:</strong></p>
					<div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #7c3aed; margin-top: 10px; border-radius: 4px;">
						<p style="color: #333; line-height: 1.6; margin: 0;">${safeMessage}</p>
					</div>
				</div>
				<p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
					This message was sent from your portfolio contact form.
				</p>
			</div>`,
		});

		return NextResponse.json(
			{ message: "Message sent successfully!" },
			{ status: 200, headers: rateLimitHeaders }
		);
	} catch (error) {
		console.error(
			"Error sending contact email:",
			error instanceof Error ? error.message : "Unknown SMTP error"
		);
		return NextResponse.json(
			{ message: "Error sending email." },
			{ status: 500, headers: rateLimitHeaders }
		);
	}
}
