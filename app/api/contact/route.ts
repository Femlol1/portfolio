import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { services } from "@/data";

// Ensure the route is dynamically generated
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_REQUEST_BYTES = 16_384;
const INPUT_LIMITS = {
	name: 80,
	email: 254,
	message: 2_000,
	service: 100,
} as const;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitStore = new Map<string, RateLimitEntry>();

const getClientIp = (req: NextRequest) =>
	req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
	req.headers.get("x-real-ip") ||
	"unknown";

const checkRateLimit = (key: string) => {
	const now = Date.now();
	const current = rateLimitStore.get(key);

	if (!current || current.resetAt <= now) {
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

// Named export for the POST method
export async function POST(req: NextRequest) {
	const rateLimit = checkRateLimit(getClientIp(req));
	const rateLimitHeaders = {
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

	const declaredLength = Number(req.headers.get("content-length") ?? 0);
	if (declaredLength > MAX_REQUEST_BYTES) {
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

	if (service && !services.some((item) => item.title === service)) {
		return NextResponse.json(
			{ message: "Please select a valid service." },
			{ status: 400, headers: rateLimitHeaders }
		);
	}

	if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
		return NextResponse.json(
			{ message: "Contact form is not configured." },
			{ status: 500, headers: rateLimitHeaders }
		);
	}

	const smtpPort = Number(process.env.SMTP_PORT ?? 587);
	const safeName = escapeHtml(name);
	const safeEmail = escapeHtml(email);
	const safeMessage = escapeHtml(message);
	const safeService = service ? escapeHtml(service) : "";

	// Nodemailer transporter configuration
	const transporter = nodemailer.createTransport({
		service: "Gmail",
		port: smtpPort,
		secure: smtpPort === 465,
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
			to: "osibemekunosifemi@gmail.com",
			subject: `New Portfolio message from ${name}${
				service ? ` - ${service}` : ""
			}`,
			text: [
				"New Portfolio Contact",
				`Name: ${name}`,
				`Email: ${email}`,
				service ? `Service of Interest: ${service}` : "",
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
							? `<p><strong style="color: #555;">Service of Interest:</strong> <span style="color: #7c3aed; font-weight: 500;">${safeService}</span></p>`
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
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Error sending email." },
			{ status: 500, headers: rateLimitHeaders }
		);
	}
}
