import StructuredData from "@/components/seo/StructuredData";
import ContactMe from "@/components/shared/ContactMe";
import Footer from "@/components/shared/Footer";
import PricingSection from "@/components/shared/Pricing";
import ServicesSection from "@/components/shared/Services";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { RelatedContent } from "@/components/ui/InternalLink";
import { navItems } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Web Development Services & Pricing",
	description:
		"Professional web development services including full-stack development, e-commerce solutions, events management systems, and UI/UX design. Transparent pricing from £500-£2500+.",
	keywords: [
		"web development services",
		"full-stack development",
		"e-commerce development",
		"Next.js development services",
		"React development services",
		"web development pricing",
		"custom web applications",
		"events management systems",
		"UI/UX design services",
		"database solutions",
		"API development",
		"responsive web design",
		"web development packages",
		"freelance web developer UK",
	],
	openGraph: {
		title: "Web Development Services & Pricing | Osifemi Osibemekun",
		description:
			"Professional web development services including full-stack development, e-commerce solutions, and UI/UX design. Transparent pricing from £500-£2500+.",
		url: "https://www.osifemi.dev/services",
		images: [
			{
				url: "/assets/myface.jpeg",
				width: 1200,
				height: 630,
				alt: "Web Development Services by Osifemi Osibemekun",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Web Development Services & Pricing | Osifemi Osibemekun",
		description:
			"Professional web development services including full-stack development, e-commerce solutions, and UI/UX design.",
	},
	alternates: {
		canonical: "https://www.osifemi.dev/services",
	},
};

export default function ServicesPage() {
	return (
		<>
			<StructuredData type="service" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
				<div className="max-w-7xl w-full">
					<FloatingNav navItems={navItems} />
					<Breadcrumb />
					<div className="pt-36">
						<div className="flex justify-center">
							<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
								<h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
									My <span className="text-purple">Services</span>
								</h1>
								<p className="text-center text-white-200 mt-4 text-lg md:text-xl max-w-3xl">
									I offer comprehensive web development solutions tailored to
									your business needs. From full-stack development to
									specialized consulting, I&apos;m here to bring your vision to
									life.
								</p>
							</div>
						</div>
					</div>
					<ServicesSection />
					<PricingSection />
					<RelatedContent
						title="Explore More"
						links={[
							{
								href: "/",
								title: "View My Portfolio",
								description:
									"See examples of my work and projects I've completed for clients.",
							},
							{
								href: "/contact-me",
								title: "Get a Quote",
								description:
									"Ready to start your project? Let's discuss your requirements.",
							},
							{
								href: "https://github.com/Femlol1",
								title: "GitHub Repository",
								description: "Check out my code and open-source contributions.",
								external: true,
							},
						]}
					/>
					<ContactMe />
					<Footer />
				</div>
			</main>
		</>
	);
}
