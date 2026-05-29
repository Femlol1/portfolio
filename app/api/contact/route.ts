import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure the route is dynamically generated
export const dynamic = "force-dynamic";

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
	let body: {
		name?: string;
		email?: string;
		message?: string;
		service?: string;
	};

	try {
		body = await req.json();
	} catch {
		return NextResponse.json(
			{ message: "Invalid request body." },
			{ status: 400 }
		);
	}

	const name = body.name?.trim() ?? "";
	const email = body.email?.trim() ?? "";
	const message = body.message?.trim() ?? "";
	const service = body.service?.trim() ?? "";

	// Basic validation
	if (!name || !email || !message) {
		return NextResponse.json(
			{ message: "All fields are required." },
			{ status: 400 }
		);
	}

	if (!isValidEmail(email)) {
		return NextResponse.json(
			{ message: "Please provide a valid email address." },
			{ status: 400 }
		);
	}

	if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
		return NextResponse.json(
			{ message: "Contact form is not configured." },
			{ status: 500 }
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
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Error sending email." },
			{ status: 500 }
		);
	}
}
