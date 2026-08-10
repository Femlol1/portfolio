import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

interface QuickLinksProps {
	currentPage?: string;
}

const QuickLinks = ({ currentPage = "" }: QuickLinksProps) => {
	const allLinks = [
		{
			title: "Portfolio",
			description: "View my latest web development projects",
			href: "/projects",
			icon: "🚀",
			internal: true,
		},
		{
			title: "Services & Pricing",
			description:
				"Explore my web development services and transparent pricing",
			href: "/services",
			icon: "💼",
			internal: true,
		},
		{
			title: "Get In Touch",
			description: "Ready to start your project? Let's discuss your needs",
			href: "/contact-me",
			icon: "📧",
			internal: true,
		},
		{
			title: "GitHub Profile",
			description: "Check out my code and contributions",
			href: "https://github.com/Femlol1",
			icon: "💻",
			internal: false,
		},
	];

	// Filter links consistently on both server and client
	const links = allLinks.filter((link) => {
		if (!currentPage) return true;
		return !link.href.includes(currentPage) && currentPage !== link.href;
	});

	return (
		<section className="py-12" aria-labelledby="explore-more-heading">
			<div className="text-center mb-8">
				<h2
					id="explore-more-heading"
					className="text-2xl md:text-3xl font-bold text-white mb-2"
				>
					Explore More
				</h2>
				<p className="text-white-200">
					Discover more about my work and services
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{links.map((link) => (
					<div
						key={link.href}
						className="group bg-black-200 border border-white/[0.1] rounded-lg p-6 hover:border-purple/50 transition-all duration-300 hover:transform hover:-translate-y-1"
					>
						{link.internal ? (
							<Link href={link.href} className="block">
								<div className="flex items-start gap-4">
									<span aria-hidden="true" className="text-2xl">{link.icon}</span>
									<div>
										<h3 className="text-white font-semibold mb-2 group-hover:text-purple transition-colors">
											{link.title}
										</h3>
										<p className="text-white-200 text-sm mb-3">
											{link.description}
										</p>
										<div className="flex items-center text-purple text-sm">
											<span>Learn more</span>
											<FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
										</div>
									</div>
								</div>
							</Link>
						) : (
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="block"
							>
								<div className="flex items-start gap-4">
									<span aria-hidden="true" className="text-2xl">{link.icon}</span>
									<div>
										<h3 className="text-white font-semibold mb-2 group-hover:text-purple transition-colors">
											{link.title}
										</h3>
										<p className="text-white-200 text-sm mb-3">
											{link.description}
										</p>
										<div className="flex items-center text-purple text-sm">
											<span>Visit</span>
											<FaExternalLinkAlt className="ml-2 w-3 h-3" />
											<span className="sr-only"> (opens in a new tab)</span>
										</div>
									</div>
								</div>
							</a>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default QuickLinks;
