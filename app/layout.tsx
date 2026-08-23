import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/shared/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://www.osifemi.dev"),
	title: {
		default:
			"Osifemi Osibemekun - Full-Stack Web Developer | Next.js & React",
		template: "%s | Osifemi Osibemekun - Web Developer",
	},
	description:
		"UK full-stack web developer creating responsive websites, e-commerce stores, event platforms, custom web apps, and technical SEO improvements with clear starting prices.",
	keywords: [
		"full-stack developer",
		"web developer",
		"Next.js developer",
		"React developer",
		"TypeScript",
		"web development services",
		"e-commerce development",
		"SEO services UK",
		"technical SEO improvements",
		"website packages and pricing",
		"custom web applications",
		"frontend developer",
		"backend developer",
		"responsive design",
		"UI/UX design",
		"JavaScript developer",
		"portfolio website",
		"freelance developer",
		"UK web developer",
	],
	authors: [{ name: "Osifemi Osibemekun" }],
	creator: "Osifemi Osibemekun",
	publisher: "Osifemi Osibemekun",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_GB",
		title:
			"Osifemi Osibemekun - Full-Stack Web Developer | Next.js & React",
		description:
			"Responsive websites, e-commerce stores, event platforms, custom web apps, and technical SEO improvements with clear starting prices.",
		siteName: "Osifemi Osibemekun Portfolio",
		images: [
			{
				url: "/social-preview.png",
				width: 1200,
				height: 630,
				alt: "Osifemi Osibemekun - Full-Stack Web Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Osifemi Osibemekun - Full-Stack Web Developer",
		description:
			"Responsive websites, e-commerce stores, custom web apps, and technical SEO improvements with clear starting prices.",
		images: ["/social-preview.png"],
	},
	icons: {
		icon: "/favicon.ico",
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Schema.org markup for Organization */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "WebSite",
							name: "Osifemi Osibemekun Portfolio",
							url: "https://www.osifemi.dev",
							description:
								"Professional full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
							author: {
								"@type": "Person",
								name: "Osifemi Osibemekun",
								jobTitle: "Full-Stack Web Developer",
							},
						}),
					}}
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<a
						href="#main-content"
						className="fixed left-4 top-4 z-[6000] -translate-y-24 rounded-md bg-purple px-4 py-3 font-semibold text-black-100 shadow-lg transition-transform focus:translate-y-0 focus:outline-none motion-reduce:transition-none"
					>
						Skip to main content
					</a>
					<FloatingNav navItems={navItems} />
					{children}
					<Footer />
				</ThemeProvider>
				{process.env.VERCEL === "1" ? <Analytics /> : null}
			</body>
		</html>
	);
}
