import StructuredData from "@/components/seo/StructuredData";
import ContactMe from "@/components/shared/ContactMe";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Me - Get In Touch",
	description:
		"Get in touch with Osifemi Osibemekun, a professional full-stack web developer. Let's discuss your next web development project and bring your ideas to life.",
	keywords: [
		"contact web developer",
		"hire full-stack developer",
		"web development consultation",
		"project discussion",
		"web development services UK",
		"get quote web development",
		"contact Osifemi Osibemekun",
		"freelance web developer contact",
	],
	openGraph: {
		title: "Contact Me - Get In Touch | Osifemi Osibemekun",
		description:
			"Get in touch with Osifemi Osibemekun, a professional full-stack web developer. Let's discuss your next web development project.",
		url: "https://www.osifemi.dev/contact-me",
		images: [
			{
				url: "/assets/myface.jpeg",
				width: 1200,
				height: 630,
				alt: "Contact Osifemi Osibemekun - Full-Stack Web Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Me - Get In Touch | Osifemi Osibemekun",
		description:
			"Get in touch with a professional full-stack web developer. Let's discuss your next project.",
	},
	alternates: {
		canonical: "https://www.osifemi.dev/contact-me",
	},
};

export default function ContactPage() {
	return (
		<>
			<StructuredData type="organization" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
				<div className="max-w-7xl w-full">
					<FloatingNav navItems={navItems} />
					<Breadcrumb />
					<div className="pt-36">
						<div className="flex justify-center">
							<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
								<h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
									Get In <span className="text-purple">Touch</span>
								</h1>
								<p className="text-center text-white-200 mt-4 text-lg md:text-xl max-w-3xl">
									Ready to bring your vision to life? Let&apos;s discuss your
									next web development project and create something amazing
									together.
								</p>
							</div>
						</div>
					</div>
					<ContactMe />
					<Footer />
				</div>
			</main>
		</>
	);
}
