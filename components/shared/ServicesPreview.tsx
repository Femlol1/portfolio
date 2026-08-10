import { services } from "@/data";
import Image from "next/image";
import Link from "next/link";

const ServicesPreview = () => {
	// Show only first 3 services for preview
	const previewServices = services.slice(0, 3);

	return (
		<section aria-labelledby="services-heading" className="py-20" id="services">
			<h2 className="heading system-reveal mb-16" id="services-heading">
				My <span className="text-purple">Services</span>
			</h2>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
				{previewServices.map((service) => (
					<article
						key={service.id}
						className="system-surface system-surface--lift group relative rounded-2xl border border-white/[0.1] bg-black-100 p-6 transition-all duration-300 hover:bg-black-200 motion-reduce:transition-none"
					>
						{/* Gradient border effect */}
						<div
							className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20 group-focus-within:opacity-20 motion-reduce:transition-none`}
						/>

						<div className="relative z-10">
							{/* Icon */}
							<div
								className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 mb-4`}
							>
								<Image
									src={service.icon}
									alt=""
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
											<span aria-hidden="true" className="text-purple mt-1 text-xs">
												✦
											</span>
											{feature}
										</li>
									))}
							</ul>

							{/* Learn more link */}
							<Link
								href="/services"
								className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-purple transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
							>
								Learn More →
							</Link>
						</div>
					</article>
				))}
			</div>

			{/* View all services CTA */}
			<div className="text-center">
				<Link
					href="/services"
					className="inline-flex min-h-11 items-center justify-center rounded-full bg-purple px-8 py-3 font-semibold text-black-100 transition-colors duration-300 hover:bg-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
				>
					View All Services
				</Link>
			</div>
		</section>
	);
};

export default ServicesPreview;
