import StructuredData from "@/components/seo/StructuredData";
import ContactMe from "@/components/shared/ContactMe";
import PricingSection from "@/components/shared/Pricing";
import ServicesSection from "@/components/shared/Services";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { RelatedContent } from "@/components/ui/InternalLink";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "Website, SEO & Automation Packages | Osifemi",
	},
	description:
		"Compare UK-priced website, booking, SEO, migration, accessibility, and automation packages with clear scopes and prices from £150.",
	keywords: [
		"web development services",
		"website packages UK",
		"website design prices UK",
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
		"SEO improvement service",
		"online booking system UK",
		"website migration service",
		"website accessibility audit",
		"workflow automation services",
		"technical SEO audit",
		"on-page SEO service",
		"Search Console setup",
		"web development packages",
		"freelance web developer UK",
	],
	openGraph: {
		title: "Website, SEO & Automation Packages | Osifemi",
		description:
			"Compare clear starting prices for websites, booking systems, SEO, migrations, accessibility, e-commerce, and automation.",
		url: "https://www.osifemi.dev/services",
		images: [
			{
				url: "/social-preview.png",
				width: 1200,
				height: 630,
				alt: "Web Development Services by Osifemi Osibemekun",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Website, SEO & Automation Packages | Osifemi",
		description:
			"Clear starting prices for websites, bookings, SEO, migrations, accessibility, and automation.",
		images: ["/social-preview.png"],
	},
	alternates: {
		canonical: "https://www.osifemi.dev/services",
	},
};

export default function ServicesPage() {
	return (
		<>
			<StructuredData type="service" />
			<main
				id="main-content"
				tabIndex={-1}
				className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
			>
				<div className="max-w-7xl w-full">
					<Breadcrumb />
					<div className="pt-36">
						<div className="flex justify-center">
							<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
								<h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
									Products <span className="text-purple">& Services</span>
								</h1>
								<p className="text-center text-white-200 mt-4 text-lg md:text-xl max-w-3xl">
									Choose a clearly scoped package for websites, bookings, SEO,
									migrations, accessibility, or automation—or combine capabilities
									for a custom solution.
								</p>
							</div>
						</div>
					</div>
					<PricingSection />
					<ServicesSection />
					<RelatedContent
						title="Explore More"
						links={[
							{
								href: "/projects",
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
				</div>
			</main>
		</>
	);
}
