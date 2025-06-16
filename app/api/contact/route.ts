import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure the route is dynamically generated
export const dynamic = "force-dynamic";

// Named export for the POST method
export async function POST(req: NextRequest) {
	const { name, email, message, service } = await req.json();

	// Basic validation
	if (!name || !email || !message) {
		return NextResponse.json(
			{ message: "All fields are required." },
			{ status: 400 }
		);
	}

	// Nodemailer transporter configuration
	const transporter = nodemailer.createTransport({
		service: "Gmail", // Replace with your email service
		port: 587,
		secure: true, // Use TLS (not SSL) for port 587
		auth: {
			user: process.env.SMTP_USER, // Your email (env var)
			pass: process.env.SMTP_PASS, // Your email password (env var)
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	try {
		// Send the email
		await transporter.sendMail({
			from: process.env.SMTP_USER, // The sender's email address
			to: "osibemekunosifemi@gmail.com", // Replace with your email address to receive messages
			subject: `New Portfolio message from ${name}${
				service ? ` - ${service}` : ""
			}`,
			html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
				<h2 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Portfolio Contact</h2>
				<div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<p><strong style="color: #555;">Name:</strong> <span style="color: #333;">${name}</span></p>
					<p><strong style="color: #555;">Email:</strong> <span style="color: #333;">${email}</span></p>
					${
						service
							? `<p><strong style="color: #555;">Service of Interest:</strong> <span style="color: #7c3aed; font-weight: 500;">${service}</span></p>`
							: ""
					}
					<p><strong style="color: #555;">Message:</strong></p>
					<div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #7c3aed; margin-top: 10px; border-radius: 4px;">
						<p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
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
