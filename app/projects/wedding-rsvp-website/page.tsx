import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import QuickLinks from "@/components/shared/QuickLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { projects } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const project = projects.find((p) => p.id === 1)!;

export const metadata: Metadata = {
	title: "Wedding RSVP Website | Tolu & Ope",
	description:
		"A beautiful wedding website with RSVP management system built with React, TypeScript, and Firebase. Features elegant design, guest tracking, and seamless user experience.",
	keywords: [
		"wedding website",
		"RSVP management",
		"React development",
		"TypeScript",
		"Firebase",
		"responsive design",
		"event management",
		"guest tracking",
	],
	openGraph: {
		title: "Wedding RSVP Website | Osifemi Osibemekun Portfolio",
		description:
			"A beautiful wedding website with RSVP management system built with modern web technologies.",
		type: "article",
		url: "https://www.osifemi.dev/projects/wedding-rsvp-website",
		images: [
			{
				url: "/to.png",
				width: 1200,
				height: 630,
				alt: "Wedding RSVP website homepage showing elegant design",
			},
		],
	},
	alternates: {
		canonical: "https://www.osifemi.dev/projects/wedding-rsvp-website",
	},
};

export default function WeddingRSVPProjectPage() {
	return (
		<>
			<StructuredData type="project" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
				<div className="max-w-7xl w-full">
					<Breadcrumb />

					<div className="py-12">
						{/* Hero Section */}
						<div className="text-center mb-12">
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
								Wedding RSVP Website
							</h1>
							<p className="text-white-200 text-lg max-w-3xl mx-auto mb-8">
								{project.des}
							</p>

							{/* Project Links */}
							<div className="flex flex-wrap gap-4 justify-center mb-8">
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg transition-colors duration-200"
								>
									<FaExternalLinkAlt className="w-4 h-4" />
									View Live Site
								</Link>
							</div>
						</div>

						{/* Project Image */}
						<div className="mb-12">
							<div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-white/[0.1]">
								<Image
									src={project.img}
									alt={project.alt}
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>

						{/* Project Details */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
							{/* Main Content */}
							<div className="lg:col-span-2">
								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Project Overview
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										This elegant wedding website was created for Tolu &amp;
										Ope&apos;s special day, featuring a comprehensive RSVP
										management system. The project showcases modern web
										development techniques with a focus on user experience and
										visual appeal.
									</p>
									<p className="text-white-200 leading-relaxed">
										The website allows guests to easily RSVP, view wedding
										details, and access important information about the
										celebration. The responsive design ensures a seamless
										experience across all devices.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Key Features
									</h2>
									<ul className="text-white-200 leading-relaxed space-y-2">
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Interactive RSVP form with real-time validation
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Guest list management and tracking system</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Beautiful photo gallery and timeline</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Responsive design optimized for mobile devices
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Real-time database integration with Firebase</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Email notifications for RSVP confirmations</span>
										</li>
									</ul>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Technical Implementation
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										The website was built using React with TypeScript for type
										safety and better development experience. Firebase was
										chosen for the backend to handle real-time data
										synchronization and user authentication.
									</p>
									<p className="text-white-200 leading-relaxed">
										Tailwind CSS was used for styling to create a clean, elegant
										design that reflects the couple&apos;s style and wedding
										theme. The RSVP system includes form validation, guest
										counting, and dietary requirement collection.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Challenges & Solutions
									</h2>
									<div className="space-y-4">
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Real-time RSVP Updates
											</h3>
											<p className="text-white-200 text-sm">
												Implemented Firebase Firestore listeners to provide
												real-time updates when guests RSVP, ensuring the couple
												could track responses instantly.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Mobile Optimization
											</h3>
											<p className="text-white-200 text-sm">
												Designed with mobile-first approach, ensuring the RSVP
												process is smooth on smartphones since most guests would
												access the site via mobile devices.
											</p>
										</div>
									</div>
								</section>
							</div>

							{/* Sidebar */}
							<div className="lg:col-span-1">
								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-3">
										{project.iconLists.map((icon, index) => (
											<div
												key={index}
												className="w-10 h-10 flex items-center justify-center bg-black-100 rounded-lg border border-white/[0.1]"
											>
												<Image
													src={icon}
													alt="Technology icon"
													width={24}
													height={24}
												/>
											</div>
										))}
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Project Timeline
									</h3>
									<p className="text-white-200 text-sm mb-2">
										<strong>Duration:</strong> 3 weeks
									</p>
									<p className="text-white-200 text-sm mb-2">
										<strong>Completion:</strong> 2023
									</p>
									<p className="text-white-200 text-sm">
										<strong>Status:</strong> Live & Active
									</p>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
									<h3 className="text-white font-semibold mb-4">
										Client Feedback
									</h3>
									<blockquote className="text-white-200 text-sm italic">
										&quot;The website exceeded our expectations! Our guests
										loved how easy it was to RSVP, and we could track everything
										in real-time. Absolutely perfect for our special day.&quot;
									</blockquote>
									<cite className="text-purple text-sm mt-2 block">
										- Tolu & Ope
									</cite>
								</div>
							</div>
						</div>

						{/* Related Projects */}
						<QuickLinks currentPage="projects/wedding-rsvp-website" />
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
