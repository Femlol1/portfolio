"use client";
import { services } from "@/data";
import Image from "next/image";
import Link from "next/link";

const ServicesPreview = () => {
	// Show only first 3 services for preview
	const previewServices = services.slice(0, 3);

	return (
		<div className="py-20" id="services">
			<h1 className="heading mb-16">
				My <span className="text-purple">Services</span>
			</h1>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
				{previewServices.map((service) => (
					<div
						key={service.id}
						className="relative p-6 rounded-2xl border border-white/[0.1] bg-black-100 hover:bg-black-200 transition-all duration-300 group"
					>
						{/* Gradient border effect */}
						<div
							className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
						/>

						<div className="relative z-10">
							{/* Icon */}
							<div
								className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 mb-4`}
							>
								<Image
									src={service.icon}
									alt={service.title}
									width={24}
									height={24}
									className="w-6 h-6"
								/>
							</div>

							{/* Title */}
							<h3 className="text-xl font-bold text-white mb-3">
								{service.title}
							</h3>

							{/* Description */}
							<p className="text-white-100 text-sm leading-relaxed mb-4">
								{service.description}
							</p>

							{/* Key features (show first 3) */}
							<ul className="space-y-2 mb-6">
								{service.features
									.slice(0, 3)
									.map((feature: string, index: number) => (
										<li
											key={index}
											className="flex items-start gap-2 text-white-100 text-sm"
										>
											<span className="text-purple mt-1 text-xs">✦</span>
											{feature}
										</li>
									))}
							</ul>

							{/* Learn more link */}
							<Link
								href="/services"
								className="inline-flex items-center text-purple hover:text-white transition-colors text-sm font-medium"
							>
								Learn More →
							</Link>
						</div>
					</div>
				))}
			</div>

			{/* View all services CTA */}
			<div className="text-center">
				<Link href="/services">
					<button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
						View All Services
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ServicesPreview;
