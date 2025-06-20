"use client";

import Script from "next/script";

const FAQ = () => {
	const faqs = [
		{
			question: "What technologies do you specialize in?",
			answer:
				"I specialize in modern web technologies including Next.js, React, TypeScript, Node.js, MongoDB, and various cloud platforms. I focus on full-stack development with a strong emphasis on performance and user experience.",
		},
		{
			question: "How long does a typical web development project take?",
			answer:
				"Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex full-stack applications can take 4-8 weeks. I provide detailed timelines during the initial consultation.",
		},
		{
			question: "Do you provide ongoing maintenance and support?",
			answer:
				"Yes, I offer ongoing maintenance packages including regular updates, security patches, performance monitoring, and technical support. All projects include initial support periods.",
		},
		{
			question: "Can you work with existing websites or only build new ones?",
			answer:
				"I can both build new websites from scratch and improve existing ones. This includes adding new features, optimizing performance, fixing bugs, and modernizing outdated code.",
		},
		{
			question: "What is your development process?",
			answer:
				"My process includes: 1) Initial consultation and requirements gathering, 2) Design and architecture planning, 3) Development with regular updates, 4) Testing and quality assurance, 5) Deployment and launch, 6) Post-launch support and maintenance.",
		},
		{
			question: "Do you offer e-commerce development?",
			answer:
				"Yes, I develop custom e-commerce solutions with features like shopping cart functionality, payment gateway integration, inventory management, admin dashboards, and AI-powered customer support chatbots.",
		},
	];

	const faqStructuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<>
			<Script
				id="faq-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqStructuredData),
				}}
			/>
			<section className="py-20" id="faq">
				<div className="max-w-4xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Frequently Asked <span className="text-purple">Questions</span>
						</h2>
						<p className="text-white-200 text-lg">
							Common questions about my web development services
						</p>
					</div>

					<div className="space-y-6">
						{faqs.map((faq, index) => (
							<details
								key={index}
								className="group bg-black-200 border border-white/[0.1] rounded-lg p-6 hover:bg-black-100 transition-colors duration-300"
							>
								<summary className="flex justify-between items-center cursor-pointer text-white font-semibold text-lg list-none">
									<span>{faq.question}</span>
									<span className="ml-4 text-purple group-open:rotate-45 transition-transform duration-300">
										+
									</span>
								</summary>
								<div className="mt-4 text-white-200 leading-relaxed">
									{faq.answer}
								</div>
							</details>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQ;
