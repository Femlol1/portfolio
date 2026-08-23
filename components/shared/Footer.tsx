import { CONTACT_EMAIL, socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
	const footerLinks = [
		{
			id: "navigation",
			title: "Navigation",
			links: [
				{ name: "Home", href: "/", external: false },
				{ name: "About", href: "/#about", external: false },
				{ name: "Projects", href: "/projects", external: false },
				{
					name: "Products & pricing",
					href: "/services#products",
					external: false,
				},
				{ name: "Contact", href: "/contact-me", external: false },
			],
		},
		{
			id: "featured-products",
			title: "Featured products",
			links: [
				{
					name: "Business Website",
					href: "/services#business-website",
					external: false,
				},
				{
					name: "SEO Improvement Sprint",
					href: "/services#seo-improvement-sprint",
					external: false,
				},
				{
					name: "Booking & Deposit System",
					href: "/services#booking-deposit-system",
					external: false,
				},
				{
					name: "SEO-Conscious Website Migration",
					href: "/services#seo-conscious-website-migration",
					external: false,
				},
				{
					name: "Accessibility Audit & Fix",
					href: "/services#accessibility-audit-fix",
					external: false,
				},
				{
					name: "CRM & Workflow Automation",
					href: "/services#crm-workflow-automation",
					external: false,
				},
			],
		},
		{
			id: "connect",
			title: "Connect",
			links: [
				{ name: "GitHub", href: "https://github.com/Femlol1", external: true },
				{
					name: "LinkedIn",
					href: "https://www.linkedin.com/in/osifemi/",
					external: true,
				},
				{
					name: "Instagram",
					href: "https://www.instagram.com/osifemi.dev/",
					external: true,
				},
				{
					name: "Email",
					href: `mailto:${CONTACT_EMAIL}`,
					external: true,
				},
			],
		},
	];

	return (
		<footer
			className="w-full border-t border-white/[0.1] bg-black-100 pb-10"
			id="footer"
		>
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 pt-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Brand Section */}
					<div className="md:col-span-1">
						<h2 className="text-xl font-bold text-white mb-4">
							Osifemi <span className="text-purple">Osibemekun</span>
						</h2>
						<p className="text-white-200 text-sm leading-relaxed mb-4">
							Full-Stack Web Developer specializing in modern technologies.
							Creating exceptional digital experiences for businesses worldwide.
						</p>
						<div className="flex items-center gap-4">
							{socialMedia.map((profile) => (
								<Link
									key={profile.id}
									href={profile.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex h-11 w-11 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter saturate-180 transition-colors duration-300 hover:border-purple/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
									aria-label={`${profile.title} (opens in a new tab)`}
								>
									<Image
										src={profile.img}
										alt=""
										aria-hidden="true"
										width={20}
										height={20}
										title={profile.title}
									/>
								</Link>
							))}
						</div>
					</div>

					{/* Footer Links */}
					{footerLinks.map((section) => (
						<nav
							key={section.title}
							aria-labelledby={`footer-${section.id}-heading`}
							className="md:col-span-1"
						>
							<h2
								id={`footer-${section.id}-heading`}
								className="text-white font-semibold mb-4"
							>
								{section.title}
							</h2>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.href}>
										{link.external ? (
											<a
												href={link.href}
												target={link.href.startsWith("http") ? "_blank" : undefined}
												rel={
													link.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}
												className="inline-flex min-h-6 items-center rounded-sm text-sm text-white-200 transition-colors duration-200 hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
											>
												{link.name}
												{link.href.startsWith("http") && (
													<span className="sr-only"> (opens in a new tab)</span>
												)}
											</a>
										) : (
											<Link
												href={link.href}
												className="inline-flex min-h-6 items-center rounded-sm text-sm text-white-200 transition-colors duration-200 hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
											>
												{link.name}
											</Link>
										)}
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>

				{/* Bottom Footer */}
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.1]">
					<p className="text-white-200 text-sm mb-4 md:mb-0">
						Copyright <FaRegCopyright aria-hidden="true" className="inline mx-1" /> 2026 Osifemi
						Osibemekun. All rights reserved.
					</p>
					<div className="flex gap-6 text-xs text-white-200">
						<Link
							href="/privacy"
							className="inline-flex min-h-6 items-center rounded-sm transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="inline-flex min-h-6 items-center rounded-sm transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							Terms of Service
						</Link>
						<Link
							href="/sitemap.xml"
							className="inline-flex min-h-6 items-center rounded-sm transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
