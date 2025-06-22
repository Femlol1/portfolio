import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import QuickLinks from "@/components/shared/QuickLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { projects } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const project = projects.find((p) => p.id === 2)!;

export const metadata: Metadata = {
	title: "Events Management Platform | Kunle's Games Night",
	description:
		"A comprehensive events management platform built with Next.js, TypeScript, and MongoDB. Features event creation, user management, and responsive design for seamless event coordination.",
	keywords: [
		"events management",
		"Next.js development",
		"TypeScript",
		"MongoDB",
		"event platform",
		"responsive design",
		"user management",
		"event coordination",
	],
	openGraph: {
		title: "Events Management Platform | Osifemi Osibemekun Portfolio",
		description:
			"A full-featured events management platform with responsive design and seamless user interactions.",
		type: "article",
		url: "https://www.osifemi.dev/projects/events-management-platform",
		images: [
			{
				url: "/kgn.png",
				width: 1200,
				height: 630,
				alt: "Events management platform dashboard",
			},
		],
	},
	alternates: {
		canonical: "https://www.osifemi.dev/projects/events-management-platform",
	},
};

export default function EventsManagementProjectPage() {
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
								Events Management Platform
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
									View Live Platform
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
										Kunle&apos;s Games Night is a comprehensive events
										management platform designed to streamline the process of
										organizing and managing gaming events. The platform provides
										a complete solution for event creators and participants
										alike.
									</p>
									<p className="text-white-200 leading-relaxed">
										Built with modern web technologies, the platform focuses on
										user experience, performance optimization, and responsive
										design to ensure seamless functionality across all devices
										and screen sizes.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Key Features
									</h2>
									<ul className="text-white-200 leading-relaxed space-y-2">
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Event creation and management dashboard</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>User registration and authentication system</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Real-time event updates and notifications</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Participant management and check-in system</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Event calendar with filtering and search</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Mobile-responsive design for all devices</span>
										</li>
									</ul>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Technical Architecture
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										The platform leverages Next.js for server-side rendering and
										optimal performance, with TypeScript providing type safety
										throughout the development process. MongoDB serves as the
										database solution, offering flexible document storage for
										event and user data.
									</p>
									<p className="text-white-200 leading-relaxed">
										The application follows modern React patterns with custom
										hooks for state management, API route handlers for backend
										functionality, and Tailwind CSS for consistent, responsive
										styling.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Development Highlights
									</h2>
									<div className="space-y-4">
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Performance Optimization
											</h3>
											<p className="text-white-200 text-sm">
												Implemented server-side rendering with Next.js, image
												optimization, and efficient data fetching strategies to
												ensure fast load times and smooth user interactions.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Scalable Database Design
											</h3>
											<p className="text-white-200 text-sm">
												Designed MongoDB schemas to handle growing user base and
												event data, with efficient indexing and query
												optimization for fast data retrieval.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												User Experience Focus
											</h3>
											<p className="text-white-200 text-sm">
												Created intuitive user flows for event discovery,
												registration, and management, with clear visual
												hierarchy and accessible design patterns.
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
										Project Details
									</h3>
									<p className="text-white-200 text-sm mb-2">
										<strong>Duration:</strong> 6 weeks
									</p>
									<p className="text-white-200 text-sm mb-2">
										<strong>Team Size:</strong> Solo Development
									</p>
									<p className="text-white-200 text-sm mb-2">
										<strong>Completion:</strong> 2023
									</p>
									<p className="text-white-200 text-sm">
										<strong>Status:</strong> Live &amp; Growing
									</p>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Performance Metrics
									</h3>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">Load Time:</span>
											<span className="text-purple text-sm">&lt; 2s</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Mobile Score:
											</span>
											<span className="text-purple text-sm">95+</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">SEO Score:</span>
											<span className="text-purple text-sm">100</span>
										</div>
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
									<h3 className="text-white font-semibold mb-4">Impact</h3>
									<p className="text-white-200 text-sm">
										The platform has successfully hosted multiple gaming events,
										with increased participant engagement and streamlined event
										management processes.
									</p>
								</div>
							</div>
						</div>

						{/* Related Projects */}
						<QuickLinks currentPage="projects/events-management-platform" />
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
