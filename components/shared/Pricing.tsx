"use client";
import { pricingPlans } from "@/data";
import { Button } from "../ui/moving-border";

const PricingSection = () => {
	return (
		<div className="py-20">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
				<a href="#contact" className="inline-block">
					<button className="px-8 py-3 border border-purple-500 text-purple-500 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
						Get Custom Quote
					</button>
				</a>
			</div>
		</div>
	);
};

const PricingCard = ({ plan }: { plan: any }) => {
	return (
		<div className={`relative ${plan.popular ? "transform scale-105" : ""}`}>
			{plan.popular && (
				<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
					<span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
						Most Popular
					</span>
				</div>
			)}

			<Button
				duration={Math.floor(Math.random() * 10000) + 10000}
				borderRadius="1.75rem"
				className="flex-1 text-white border-neutral-200 dark:border-slate-800 h-full"
			>
				<div className="flex flex-col p-8 gap-6 h-full">
					{/* Header */}
					<div className="text-center">
						<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
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
									<span className="text-purple mt-1 text-xs">✓</span>
									{feature}
								</li>
							))}
						</ul>
					</div>

					{/* CTA */}
					<div className="text-center">
						<a href="#contact" className="inline-block w-full">
							<button
								className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
									plan.popular
										? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
										: "border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
								}`}
							>
								Get Started
							</button>
						</a>
					</div>
				</div>
			</Button>
		</div>
	);
};

export default PricingSection;
