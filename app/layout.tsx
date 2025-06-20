import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://www.osifemi.dev"),
	title: {
		default:
			"Osifemi Osibemekun - Full-Stack Web Developer | Next.js & React Expert",
		template: "%s | Osifemi Osibemekun - Web Developer",
	},
	description:
		"Professional full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies. Creating exceptional digital experiences with custom web applications, e-commerce solutions, and responsive designs.",
	keywords: [
		"full-stack developer",
		"web developer",
		"Next.js developer",
		"React developer",
		"TypeScript",
		"web development services",
		"e-commerce development",
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
		url: "https://www.osifemi.dev",
		title:
			"Osifemi Osibemekun - Full-Stack Web Developer | Next.js & React Expert",
		description:
			"Professional full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies. Creating exceptional digital experiences.",
		siteName: "Osifemi Osibemekun Portfolio",
		images: [
			{
				url: "/assets/myface.jpeg",
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
			"Professional full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
		images: ["/assets/myface.jpeg"],
		creator: "@osifemi_dev",
	},

	alternates: {
		canonical: "https://www.osifemi.dev",
	},
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{ url: "/assets/myface.jpeg", sizes: "180x180", type: "image/jpeg" },
		],
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
				{/* Preload critical resources */}
				<link
					rel="preload"
					href="/assets/myface.jpeg"
					as="image"
					type="image/jpeg"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				{/* DNS prefetch for external domains */}
				<link rel="dns-prefetch" href="//vercel.app" />
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
							potentialAction: {
								"@type": "SearchAction",
								target: "https://www.osifemi.dev/search?q={search_term_string}",
								"query-input": "required name=search_term_string",
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
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
