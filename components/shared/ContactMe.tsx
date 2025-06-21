"use client";

import { Input } from "@/components/ui/input"; // Assuming you're using shadcn input component
import { Textarea } from "@/components/ui/textarea"; // Assuming you're using shadcn textarea component
import { services } from "@/data";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Label } from "../ui/label";
import MagicButton from "../ui/MagicButton";
import LegalLinks from "./LegalLinks";
import Loading from "./loading";

const ContactMe: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [service, setService] = useState("");
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false); // State for loading

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess(null);
		setError(null);
		setIsLoading(true); // Start loading animation

		if (!name || !email || !message) {
			console.log("Please fill out all fields.");
			setIsLoading(false); // Stop loading animation
			return;
		}

		const formData = { name, email, message, service };

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
				setError("Failed to send the message.");
			}
		} catch (error) {
			setError("An error occurred.");
		} finally {
			setIsLoading(false); // Stop loading animation
		}
	};

	return (
		<section className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw] text-center">
					Ready to take <span className="text-purple">your</span> digital
					presence to the next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>

				{/* Form Container */}
				<div className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto p-6 bg-[#1E1E2F] rounded-lg shadow-md mb-5">
					<h2 className="text-2xl font-semibold text-center mb-6">
						Contact Me
					</h2>

					<form onSubmit={handleSubmit} className="space-y-4 w-full">
						<div>
							<Label
								htmlFor="name"
								className="block text-sm font-medium text-gray-300"
							>
								Name:
							</Label>
							<Input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="mt-1 bg-[#2A2A40] text-white border-gray-600 w-full"
							/>
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
								value={service}
								onChange={(e) => setService(e.target.value)}
								className="mt-1 bg-[#2A2A40] text-white border-gray-600 w-full rounded-md px-3 py-2 border"
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
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="mt-1 bg-[#2A2A40] text-white border-gray-600 w-full"
							/>
						</div>
						<div>
							<Label
								htmlFor="message"
								className="block text-sm font-medium text-gray-300"
							>
								Message:
							</Label>
							<Textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								className="mt-1 bg-[#2A2A40] text-white border-gray-600 w-full"
							/>
						</div>
						<div className="flex justify-center">
							<MagicButton
								title={isLoading ? "Sending..." : "Let's get in touch"}
								icon={isLoading ? <Loading /> : <FaLocationArrow />}
								position="right"
								otherClasses={isLoading ? "opacity-50 cursor-not-allowed" : ""}
							/>
						</div>
						{success && <p className="text-green-500 text-center">{success}</p>}
						{error && <p className="text-red-500 text-center">{error}</p>}
					</form>
				</div>

				{/* Legal Links */}
				<LegalLinks />
			</div>
		</section>
	);
};

export default ContactMe;
