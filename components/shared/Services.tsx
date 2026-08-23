import { services } from "@/data";
import Link from "next/link";

const getCapabilityId = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

const ServicesSection = () => {
	return (
		<section aria-labelledby="capabilities-heading" className="py-20" id="services">
			<div className="system-reveal mx-auto max-w-3xl text-center">
				<p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
					Custom scope
				</p>
				<h2
					id="capabilities-heading"
					className="text-3xl font-bold text-white md:text-4xl"
				>
					Combine the <span className="text-purple">capabilities you need</span>
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-white-100">
					Need something beyond a fixed package? I can shape these capabilities
					around your workflow, users, and existing systems.
				</p>
			</div>

			<ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => {
					const capabilityId = getCapabilityId(service.title);

					return (
						<li
							key={service.id}
							id={capabilityId}
							className="scroll-mt-24 bg-black-200 p-5 md:p-6"
						>
							<article aria-labelledby={`${capabilityId}-title`} className="h-full">
								<div className="flex items-start gap-3">
									<span
										aria-hidden="true"
										className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r ${service.gradient}`}
									/>
									<h3
										id={`${capabilityId}-title`}
										className="text-lg font-semibold leading-snug text-white"
									>
										{service.title}
									</h3>
								</div>

								<p className="mt-3 text-sm leading-relaxed text-white-100">
									{service.description}
								</p>

								<ul
									aria-label={`Key ${service.title} capabilities`}
									className="mt-4 space-y-2 border-t border-white/10 pt-4"
								>
									{service.features.slice(0, 2).map((feature) => (
										<li
											key={feature}
											className="flex items-start gap-2 text-xs leading-relaxed text-white-200"
										>
											<span aria-hidden="true" className="mt-1 text-purple">
												+
											</span>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</article>
						</li>
					);
				})}
			</ul>

			<div className="system-surface mt-8 flex flex-col gap-5 rounded-2xl border border-white/10 bg-black-200 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
				<div className="max-w-2xl">
					<h3 className="text-xl font-semibold text-white">Need a custom combination?</h3>
					<p className="mt-2 text-sm leading-relaxed text-white-100">
						Tell me what needs to work better, and I&apos;ll recommend a focused scope.
					</p>
				</div>
				<div className="flex shrink-0 flex-col gap-3 sm:flex-row">
					<Link
						href="#contact"
						className="inline-flex min-h-11 items-center justify-center rounded-full bg-purple px-6 py-3 text-sm font-semibold text-black-100 transition-colors hover:bg-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
					>
						Discuss a custom scope
					</Link>
					<Link
						href="/projects"
						className="inline-flex min-h-11 items-center justify-center rounded-full border border-purple/60 px-6 py-3 text-sm font-semibold text-purple transition-colors hover:border-purple hover:bg-purple hover:text-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
					>
						See project examples
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
