import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
	const footerLinks = [
		{
			title: "Navigation",
			links: [
				{ name: "Home", href: "/", external: false },
				{ name: "About", href: "/#about", external: false },
				{ name: "Projects", href: "/projects", external: false },
				{ name: "Services", href: "/services", external: false },
				{ name: "Contact", href: "/contact-me", external: false },
			],
		},
		{
			title: "Services",
			links: [
				{
					name: "Full-Stack Development",
					href: "/services#full-stack",
					external: false,
				},
				{
					name: "E-commerce Solutions",
					href: "/services#ecommerce",
					external: false,
				},
				{ name: "UI/UX Design", href: "/services#design", external: false },
				{
					name: "Maintenance & Support",
					href: "/services#maintenance",
					external: false,
				},
			],
		},
		{
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
					href: "mailto:osibemekunosifemi@gmail.com",
					external: true,
				},
			],
		},
	];

	return (
		<footer
			className="w-full pb-10 mb-[100px] md:mb-5 border-t border-white/[0.1]"
			id="footer"
		>
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 pt-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Brand Section */}
					<div className="md:col-span-1">
						<h3 className="text-xl font-bold text-white mb-4">
							Osifemi <span className="text-purple">Osibemekun</span>
						</h3>
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
									className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 transition-colors duration-300"
									aria-label={profile.title}
								>
									<Image
										src={profile.img}
										alt={profile.alt}
										width={20}
										height={20}
										title={profile.title}
									/>
								</Link>
							))}
						</div>
					</div>

					{/* Footer Links */}
					{footerLinks.map((section, index) => (
						<div key={index} className="md:col-span-1">
							<h4 className="text-white font-semibold mb-4">{section.title}</h4>
							<ul className="space-y-3">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										{link.external ? (
											<a
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-white-200 hover:text-purple transition-colors duration-200 text-sm"
											>
												{link.name}
											</a>
										) : (
											<Link
												href={link.href}
												className="text-white-200 hover:text-purple transition-colors duration-200 text-sm"
											>
												{link.name}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Footer */}
				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.1]">
					<p className="text-white-200 text-sm mb-4 md:mb-0">
						Copyright <FaRegCopyright className="inline mx-1" /> 2025 Osifemi
						Osibemekun. All rights reserved.
					</p>
					<div className="flex gap-6 text-xs text-white-200">
						<Link
							href="/privacy"
							className="hover:text-purple transition-colors"
						>
							Privacy Policy
						</Link>
						<Link href="/terms" className="hover:text-purple transition-colors">
							Terms of Service
						</Link>
						<Link
							href="/sitemap.xml"
							className="hover:text-purple transition-colors"
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
