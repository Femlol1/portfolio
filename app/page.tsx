import StructuredData from "@/components/seo/StructuredData";
import Hero from "@/components/shared/Hero";
import HomeInteractiveSections from "@/components/shared/HomeInteractiveSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: {
		canonical: "https://www.osifemi.dev",
	},
	openGraph: {
		type: "website",
		locale: "en_GB",
		url: "https://www.osifemi.dev",
		title:
			"Osifemi Osibemekun - Full-Stack Web Developer | Next.js & React",
		description:
			"UK full-stack developer building responsive websites, e-commerce stores, event platforms, custom web apps, and technical SEO improvements.",
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
};

export default function Home() {
	return (
		<>
			<StructuredData type="person" />
			<StructuredData type="organization" />
			<main
				id="main-content"
				tabIndex={-1}
				className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
			>
				<div className="home-sequence max-w-7xl w-full">
					<Hero />
					<HomeInteractiveSections />
				</div>
			</main>
		</>
	);
}
