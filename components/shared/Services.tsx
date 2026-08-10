import { services } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/moving-border";

const ServicesSection = () => {
	return (
		<section aria-label="Web development services" className="py-20" id="services">
			<div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
				{services.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>

			{/* Call to Action Section */}
			<div className="mt-20 text-center">
				<div className="max-w-2xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
						Ready to Start Your Project?
					</h2>
					<p className="text-white-100 mb-8">
						Let&apos;s discuss how I can help bring your vision to life with
						custom web solutions tailored to your needs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="#contact"
							className="inline-flex min-h-11 items-center justify-center rounded-full bg-purple px-8 py-3 font-semibold text-black-100 transition-colors duration-300 hover:bg-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							Get Started Today
						</Link>
						<Link
							href="/projects"
							className="inline-flex min-h-11 items-center justify-center rounded-full border border-purple px-8 py-3 font-semibold text-purple transition-all duration-300 hover:bg-purple hover:text-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							View My Work
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const ServiceCard = ({ service }: { service: any }) => {
	// Generate anchor ID from service title
	const anchorId = service.title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
	const duration = 10000 + service.id * 1250;

	return (
		<div id={anchorId}>
			<Button
				as="article"
				aria-labelledby={`${anchorId}-title`}
				duration={duration}
				borderRadius="1.75rem"
				containerClassName="system-surface--lift"
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
								alt=""
								width={32}
								height={32}
								className="w-8 h-8"
							/>
						</div>
						<h2
							id={`${anchorId}-title`}
							className="text-xl md:text-2xl font-bold text-white"
						>
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
									<span aria-hidden="true" className="text-purple mt-1 text-xs">
										✦
									</span>
									{feature}
								</li>
							))}
						</ul>
					</div>

					{/* CTA */}
					<div className="mt-6 pt-4 border-t border-slate-800">
						<Link
							href="/#contact"
							className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-purple transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							Get Started →
						</Link>
					</div>
				</div>
			</Button>
		</div>
	);
};

export default ServicesSection;
