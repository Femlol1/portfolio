const faqs = [
	{
		question: "What technologies do you specialize in?",
		answer:
			"I specialize in modern web technologies including Next.js, React, TypeScript, Node.js, MongoDB, and cloud platforms. I focus on full-stack development with a strong emphasis on performance and user experience.",
	},
	{
		question: "How long does a typical web development project take?",
		answer:
			"Project timelines vary based on complexity. A simple website often takes 1–2 weeks, while a complex full-stack application can take 4–8 weeks. I provide a detailed timeline during the initial consultation.",
	},
	{
		question: "Do you provide ongoing maintenance and support?",
		answer:
			"Yes. I offer maintenance packages covering updates, security patches, performance monitoring, and technical support. Every project also includes an initial support period.",
	},
	{
		question: "Can you improve an existing website?",
		answer:
			"Yes. I can add features, improve performance, fix defects, modernize an older codebase, or build a new site from the ground up.",
	},
	{
		question: "What is your development process?",
		answer:
			"The process covers discovery, design and architecture, development with regular updates, quality assurance, deployment, and post-launch support.",
	},
	{
		question: "Do you offer e-commerce development?",
		answer:
			"Yes. I build e-commerce experiences with product catalogues, baskets, payment integrations, inventory workflows, administration tools, and customer-support features.",
	},
];

const FAQ = () => {
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
			<script
				id="faq-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
				}}
			/>
			<section aria-labelledby="faq-heading" className="py-20" id="faq">
				<div className="mx-auto max-w-4xl px-4">
					<div className="system-reveal mb-12 text-center">
						<h2
							id="faq-heading"
							className="mb-4 text-3xl font-bold text-white md:text-4xl"
						>
							Frequently Asked <span className="text-purple">Questions</span>
						</h2>
						<p className="text-lg text-white-200">
							Common questions about my web development services
						</p>
					</div>

					<div className="space-y-4">
						{faqs.map((faq) => (
							<details
								key={faq.question}
								className="system-surface group rounded-lg border border-white/15 bg-black-200 p-6 open:bg-black-100"
							>
								<summary className="min-h-11 cursor-pointer rounded-md py-2 text-left text-lg font-semibold text-white marker:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple">
									{faq.question}
								</summary>
								<p className="mt-4 leading-relaxed text-white-200">{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQ;
