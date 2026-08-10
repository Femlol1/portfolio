import { pricingPlans } from "@/data";
import { Button } from "../ui/moving-border";

const PricingSection = () => {
	return (
		<section aria-labelledby="pricing-heading" className="py-20" id="pricing">
			<div className="system-reveal text-center mb-16">
				<h2
					id="pricing-heading"
					className="text-3xl md:text-4xl font-bold text-white mb-4"
				>
					Transparent <span className="text-purple">Pricing</span>
				</h2>
				<p className="text-white-100 max-w-2xl mx-auto">
					Choose the perfect plan for your project. All plans include responsive
					design, clean code, and post-launch support.
				</p>
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
				{pricingPlans.map((plan) => (
					<PricingCard key={plan.id} plan={plan} />
				))}
			</div>

			<div className="text-center mt-16">
				<p className="text-white-100 mb-4">
					Need something custom? Let&apos;s discuss your specific requirements.
				</p>
				<a
					href="#contact"
					className="inline-flex min-h-11 items-center justify-center rounded-full border border-purple px-8 py-3 font-semibold text-purple transition-all duration-300 hover:bg-purple hover:text-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
				>
					Get Custom Quote
				</a>
			</div>
		</section>
	);
};

const PricingCard = ({ plan }: { plan: any }) => {
	const duration = 10000 + plan.id * 1750;

	return (
		<div className={`relative ${plan.popular ? "transform scale-105" : ""}`}>
			{plan.popular && (
				<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
					<span className="rounded-full bg-purple px-4 py-1 text-sm font-semibold text-black-100">
						Most Popular
					</span>
				</div>
			)}

			<Button
				as="article"
				aria-labelledby={`pricing-plan-${plan.id}`}
				duration={duration}
				borderRadius="1.75rem"
				containerClassName="system-surface--lift"
				className="flex-1 text-white border-neutral-200 dark:border-slate-800 h-full"
			>
				<div className="flex flex-col p-8 gap-6 h-full">
					{/* Header */}
					<div className="text-center">
						<h3
							id={`pricing-plan-${plan.id}`}
							className="text-2xl font-bold text-white mb-2"
						>
							{plan.name}
						</h3>
						<div className="mb-4">
							<span className="text-4xl font-bold text-purple">
								{plan.price}
							</span>
							<span className="text-white-100 ml-2">{plan.duration}</span>
						</div>
						<p className="text-white-100 text-sm">{plan.description}</p>
					</div>

					{/* Features */}
					<div className="flex-1">
						<ul className="space-y-3">
							{plan.features.map((feature: string, index: number) => (
								<li
									key={index}
									className="flex items-start gap-3 text-white-100 text-sm"
								>
									<span aria-hidden="true" className="text-purple mt-1 text-xs">
										✓
									</span>
									{feature}
								</li>
							))}
						</ul>
					</div>

					{/* CTA */}
					<div className="text-center">
						<a
							href="#contact"
							className={`inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none ${
								plan.popular
									? "bg-gradient-to-r from-purple-500 to-pink-500 text-slate-950 hover:from-purple-600 hover:to-pink-600"
									: "border border-purple text-purple hover:bg-purple hover:text-black-100"
							}`}
						>
							Get Started
						</a>
					</div>
				</div>
			</Button>
		</div>
	);
};

export default PricingSection;
