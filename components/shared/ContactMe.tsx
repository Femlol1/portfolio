"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data";
import React, { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import CVDownloadButton from "../ui/CVDownloadButton";
import { Label } from "../ui/label";
import MagicButton from "../ui/MagicButton";
import Loading from "./loading";

type ContactField = "name" | "email" | "message";
type ContactFieldErrors = Partial<Record<ContactField, string>>;

const ContactMe: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [service, setService] = useState("");
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
	const [isLoading, setIsLoading] = useState(false); // State for loading
	const nameInputRef = useRef<HTMLInputElement>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const messageInputRef = useRef<HTMLTextAreaElement>(null);
	const errorMessageRef = useRef<HTMLParagraphElement>(null);

	const clearFieldError = (field: ContactField) => {
		setError(null);
		setFieldErrors((currentErrors) => {
			if (!currentErrors[field]) return currentErrors;

			return { ...currentErrors, [field]: undefined };
		});
	};

	const focusSubmissionError = () => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => errorMessageRef.current?.focus());
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess(null);
		setError(null);

		const nextFieldErrors: ContactFieldErrors = {};

		if (!name.trim()) nextFieldErrors.name = "Enter your name.";
		if (!email.trim()) {
			nextFieldErrors.email = "Enter your email address.";
		} else if (emailInputRef.current?.validity.typeMismatch) {
			nextFieldErrors.email = "Enter a valid email address.";
		}
		if (!message.trim()) nextFieldErrors.message = "Enter a message.";

		const firstInvalidField = (
			["name", "email", "message"] as ContactField[]
		).find((field) => nextFieldErrors[field]);

		if (firstInvalidField) {
			setFieldErrors(nextFieldErrors);
			setError("Please correct the highlighted fields and try again.");
			requestAnimationFrame(() => {
				if (firstInvalidField === "name") nameInputRef.current?.focus();
				if (firstInvalidField === "email") emailInputRef.current?.focus();
				if (firstInvalidField === "message") messageInputRef.current?.focus();
			});
			return;
		}

		setFieldErrors({});
		setIsLoading(true); // Start loading animation

		const formData = {
			name: name.trim(),
			email: email.trim(),
			message: message.trim(),
			service,
		};

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSuccess("Message sent successfully!");
				setName("");
				setEmail("");
				setMessage("");
				setService("");
			} else {
				const result = (await response.json().catch(() => null)) as {
					message?: string;
				} | null;
				setError(result?.message || "Failed to send the message.");
				focusSubmissionError();
			}
		} catch {
			setError(
				"Something went wrong while sending your message. Please try again."
			);
			focusSubmissionError();
		} finally {
			setIsLoading(false); // Stop loading animation
		}
	};

	return (
		<section
			aria-labelledby="contact-heading"
			className="w-full pb-10 mb-[100px] md:mb-5"
			id="contact"
		>
			<div className="flex flex-col items-center">
				<h2
					id="contact-heading"
					className="heading system-reveal lg:max-w-[45vw] text-center"
				>
					Ready to take <span className="text-purple">your</span> digital
					presence to the next level?
				</h2>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>

				{/* Form Container */}
				<div className="system-surface w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto p-6 bg-[#1E1E2F] rounded-lg shadow-md mb-5">
					<h3
						id="contact-form-title"
						className="text-2xl font-semibold text-center mb-6"
					>
						Contact Me
					</h3>

					<form
						aria-labelledby="contact-form-title"
						noValidate
						onSubmit={handleSubmit}
						className="space-y-4 w-full"
					>
						<div>
							<Label
								htmlFor="name"
								className="block text-sm font-medium text-gray-300"
							>
								Name:
							</Label>
							<Input
								ref={nameInputRef}
								type="text"
								id="name"
								name="name"
								autoComplete="name"
								value={name}
								maxLength={80}
								aria-invalid={Boolean(fieldErrors.name)}
								aria-describedby={fieldErrors.name ? "name-error" : undefined}
								onChange={(e) => {
									setName(e.target.value);
									clearFieldError("name");
								}}
								required
								className={`mt-1 w-full bg-[#2A2A40] text-white ${
									fieldErrors.name ? "border-red-300" : "border-gray-400"
								}`}
							/>
							{fieldErrors.name && (
								<p id="name-error" className="mt-1 text-sm text-red-300">
									{fieldErrors.name}
								</p>
							)}
						</div>
						<div>
							<Label
								htmlFor="service"
								className="block text-sm font-medium text-gray-300"
							>
								Service of Interest (Optional):
							</Label>
							<select
								id="service"
								name="service"
								value={service}
								onChange={(e) => setService(e.target.value)}
								className="mt-1 min-h-11 w-full rounded-md border border-gray-400 bg-[#2A2A40] px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1E2F]"
							>
								<option value="">Select a service...</option>
								{services.map((serviceOption) => (
									<option key={serviceOption.id} value={serviceOption.title}>
										{serviceOption.title}
									</option>
								))}
							</select>
						</div>
						<div>
							<Label
								htmlFor="email"
								className="block text-sm font-medium text-gray-300"
							>
								Email:
							</Label>
							<Input
								ref={emailInputRef}
								type="email"
								id="email"
								name="email"
								autoComplete="email"
								inputMode="email"
								value={email}
								maxLength={254}
								aria-invalid={Boolean(fieldErrors.email)}
								aria-describedby={fieldErrors.email ? "email-error" : undefined}
								onChange={(e) => {
									setEmail(e.target.value);
									clearFieldError("email");
								}}
								required
								className={`mt-1 w-full bg-[#2A2A40] text-white ${
									fieldErrors.email ? "border-red-300" : "border-gray-400"
								}`}
							/>
							{fieldErrors.email && (
								<p id="email-error" className="mt-1 text-sm text-red-300">
									{fieldErrors.email}
								</p>
							)}
						</div>
						<div>
							<Label
								htmlFor="message"
								className="block text-sm font-medium text-gray-300"
							>
								Message:
							</Label>
							<Textarea
								ref={messageInputRef}
								id="message"
								name="message"
								autoComplete="off"
								value={message}
								maxLength={2000}
								aria-invalid={Boolean(fieldErrors.message)}
								aria-describedby={
									fieldErrors.message ? "message-error" : undefined
								}
								onChange={(e) => {
									setMessage(e.target.value);
									clearFieldError("message");
								}}
								required
								className={`mt-1 w-full bg-[#2A2A40] text-white ${
									fieldErrors.message ? "border-red-300" : "border-gray-400"
								}`}
							/>
							{fieldErrors.message && (
								<p id="message-error" className="mt-1 text-sm text-red-300">
									{fieldErrors.message}
								</p>
							)}
						</div>
						<div className="flex justify-center">
							<MagicButton
								type="submit"
								title={isLoading ? "Sending..." : "Let's get in touch"}
								icon={isLoading ? <Loading /> : <FaLocationArrow />}
								position="right"
								otherClasses={isLoading ? "opacity-50 cursor-not-allowed" : ""}
								disabled={isLoading}
								ariaBusy={isLoading}
							/>
						</div>
						{success && (
							<p role="status" className="text-center text-green-300">
								{success}
							</p>
						)}
						{error && (
							<p
								ref={errorMessageRef}
								id="contact-form-error"
								role="alert"
								tabIndex={-1}
								className="rounded-md text-center text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
							>
								{error}
							</p>
						)}
					</form>
				</div>

				{/* CV Download Section */}
				<div className="system-surface w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto p-6 bg-[#1E1E2F] rounded-lg shadow-md mb-5">
					<h3 className="text-xl font-semibold text-center mb-4">
						Want to know more about my experience?
					</h3>
					<p className="text-white-200 text-center mb-4">
						Download my CV to see my full professional background and skills.
					</p>
					<div className="flex justify-center">
						<CVDownloadButton />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
