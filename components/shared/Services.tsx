"use client";
import { services } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/moving-border";

const ServicesSection = () => {
	return (
		<div className="py-20" id="services">
			<div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
				{services.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>

			{/* Call to Action Section */}
			<div className="mt-20 text-center">
				<div className="max-w-2xl mx-auto">
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
						Ready to Start Your Project?
					</h3>
					<p className="text-white-100 mb-8">
						Let&apos;s discuss how I can help bring your vision to life with
						custom web solutions tailored to your needs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="#contact" className="inline-block">
							<button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
								Get Started Today
							</button>
						</Link>
						<Link href="/" className="inline-block">
							<button className="px-8 py-3 border border-purple-500 text-purple-500 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
								View My Work
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const ServiceCard = ({ service }: { service: any }) => {
	return (
		<Button
			duration={Math.floor(Math.random() * 10000) + 10000}
			borderRadius="1.75rem"
			className="flex-1 text-white border-neutral-200 dark:border-slate-800"
		>
			<div className="flex flex-col p-6 md:p-8 gap-4 h-full">
				{/* Header */}
				<div className="flex items-center gap-4 mb-4">
					<div
						className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-20`}
					>
						<Image
							src={service.icon}
							alt={service.title}
							width={32}
							height={32}
							className="w-8 h-8"
						/>
					</div>
					<h2 className="text-xl md:text-2xl font-bold text-white">
						{service.title}
					</h2>
				</div>

				{/* Description */}
				<p className="text-white-100 text-sm md:text-base leading-relaxed mb-4">
					{service.description}
				</p>

				{/* Features */}
				<div className="flex-1">
					<h3 className="text-purple font-semibold mb-3 text-sm uppercase tracking-wide">
						What&apos;s Included:
					</h3>
					<ul className="space-y-2">
						{service.features.map((feature: string, index: number) => (
							<li
								key={index}
								className="flex items-start gap-2 text-white-100 text-sm"
							>
								<span className="text-purple mt-1 text-xs">✦</span>
								{feature}
							</li>
						))}
					</ul>
				</div>

				{/* CTA */}
				<div className="mt-6 pt-4 border-t border-slate-800">
					<a
						href="#contact"
						className="text-purple hover:text-white transition-colors text-sm font-medium cursor-pointer"
					>
						Get Started →
					</a>
				</div>
			</div>
		</Button>
	);
};

export default ServicesSection;
