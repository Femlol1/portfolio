import { Metadata } from "next";

interface SEOConfig {
	title: string;
	description: string;
	keywords?: string[];
	canonical?: string;
	noindex?: boolean;
	image?: string;
	type?: "website" | "article";
}

export const generateSEOMetadata = (config: SEOConfig): Metadata => {
	const baseUrl = "https://www.osifemi.dev";

	return {
		title: config.title,
		description: config.description,
		keywords: config.keywords,
		robots: {
			index: !config.noindex,
			follow: !config.noindex,
			googleBot: {
				index: !config.noindex,
				follow: !config.noindex,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		openGraph: {
			type: config.type || "website",
			title: config.title,
			description: config.description,
			url: config.canonical || baseUrl,
			images: [
				{
					url: config.image || "/assets/myface.jpeg",
					width: 1200,
					height: 630,
					alt: config.title,
				},
			],
			siteName: "Osifemi Osibemekun Portfolio",
		},
		twitter: {
			card: "summary_large_image",
			title: config.title,
			description: config.description,
			images: [config.image || "/assets/myface.jpeg"],
			creator: "@osifemi_dev",
		},
		alternates: {
			canonical: config.canonical || baseUrl,
		},
	};
};

// Pre-defined SEO configs for common pages
export const seoConfigs = {
	home: {
		title:
			"Osifemi Osibemekun - Full-Stack Web Developer | Next.js & React Expert",
		description:
			"Professional full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies. Creating exceptional digital experiences with custom web applications, e-commerce solutions, and responsive designs.",
		keywords: [
			"full-stack developer",
			"web developer",
			"Next.js developer",
			"React developer",
			"TypeScript",
			"web development services",
		],
		canonical: "https://www.osifemi.dev",
	},
	services: {
		title: "Web Development Services & Pricing",
		description:
			"Professional web development services including full-stack development, e-commerce solutions, events management systems, and UI/UX design. Transparent pricing from £500-£2500+.",
		keywords: [
			"web development services",
			"full-stack development",
			"e-commerce development",
			"Next.js development services",
		],
		canonical: "https://www.osifemi.dev/services",
	},
	contact: {
		title: "Contact Me - Get In Touch",
		description:
			"Get in touch with Osifemi Osibemekun, a professional full-stack web developer. Let's discuss your next web development project and bring your ideas to life.",
		keywords: [
			"contact web developer",
			"hire full-stack developer",
			"web development consultation",
		],
		canonical: "https://www.osifemi.dev/contact-me",
	},
};
