import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import QuickLinks from "@/components/shared/QuickLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { projects } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const project = projects.find((p) => p.id === 4)!;

export const metadata: Metadata = {
	title: "Zentry Website Clone | Advanced Animations & 3D Effects",
	description:
		"A pixel-perfect recreation of the Zentry website featuring stunning GSAP animations and Three.js 3D effects. Showcases advanced frontend development skills and modern web technologies.",
	keywords: [
		"Zentry clone",
		"GSAP animations",
		"Three.js",
		"3D effects",
		"frontend development",
		"web animations",
		"advanced JavaScript",
		"modern web development",
	],
	openGraph: {
		title: "Zentry Website Clone | Osifemi Osibemekun Portfolio",
		description:
			"A stunning recreation of the Zentry website with advanced GSAP animations and Three.js 3D effects.",
		type: "article",
		url: "https://www.osifemi.dev/projects/zentry-website-clone",
		images: [
			{
				url: "/zentry.mp4",
				width: 1200,
				height: 630,
				alt: "Zentry website clone showcasing advanced animations",
			},
		],
	},
	alternates: {
		canonical: "https://www.osifemi.dev/projects/zentry-website-clone",
	},
};

export default function ZentryCloneProjectPage() {
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
								Zentry Website Clone
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
									View Live Demo
								</Link>
							</div>
						</div>

						{/* Project Video */}
						<div className="mb-12">
							<div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-white/[0.1]">
								<video
									className="w-full h-full object-cover"
									autoPlay
									muted
									loop
									playsInline
								>
									<source src={project.video} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
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
										This project represents a comprehensive recreation of the
										Zentry website, focusing on advanced frontend development
										techniques and cutting-edge web animations. The clone
										demonstrates mastery of modern JavaScript libraries and
										animation frameworks.
									</p>
									<p className="text-white-200 leading-relaxed">
										Every detail has been meticulously crafted to match the
										original design while implementing sophisticated animations
										that create an immersive and engaging user experience. The
										project showcases the intersection of design and technology.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Animation Features
									</h2>
									<ul className="text-white-200 leading-relaxed space-y-2">
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Smooth GSAP timeline animations with precise timing
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Three.js 3D elements and interactive graphics</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Scroll-triggered animations and parallax effects
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Morphing text effects and dynamic typography</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Interactive hover states and micro-interactions
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Seamless page transitions and loading animations
											</span>
										</li>
									</ul>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Technical Challenges
									</h2>
									<div className="space-y-4">
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Performance Optimization
											</h3>
											<p className="text-white-200 text-sm">
												Implemented efficient animation techniques and GPU
												acceleration to maintain 60fps performance while running
												complex 3D animations and multiple GSAP timelines
												simultaneously.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Cross-Browser Compatibility
											</h3>
											<p className="text-white-200 text-sm">
												Ensured consistent animation behavior across different
												browsers and devices, implementing fallbacks for
												unsupported features and optimizing for mobile
												performance.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Animation Synchronization
											</h3>
											<p className="text-white-200 text-sm">
												Coordinated multiple animation libraries (GSAP and
												Three.js) to work together seamlessly, creating complex
												choreographed sequences that feel natural and fluid.
											</p>
										</div>
									</div>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Development Process
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										The development process began with detailed analysis of the
										original Zentry website, breaking down each animation and
										interaction into manageable components. This was followed by
										systematic implementation of each feature, ensuring
										pixel-perfect accuracy.
									</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												Phase 1: Analysis
											</h4>
											<p className="text-white-200 text-sm">
												Studied original animations, identified key
												interactions, and planned technical approach.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												Phase 2: Foundation
											</h4>
											<p className="text-white-200 text-sm">
												Set up project structure, configured animation
												libraries, and created base components.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												Phase 3: Implementation
											</h4>
											<p className="text-white-200 text-sm">
												Built animations section by section, testing performance
												and refining timing.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												Phase 4: Polish
											</h4>
											<p className="text-white-200 text-sm">
												Fine-tuned animations, optimized performance, and
												ensured cross-device compatibility.
											</p>
										</div>
									</div>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Skills Demonstrated
									</h2>
									<p className="text-white-200 leading-relaxed">
										This project showcases advanced frontend development
										capabilities, including mastery of animation libraries, 3D
										graphics programming, performance optimization, and
										attention to detail in recreating complex interactive
										experiences.
									</p>
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
									<div className="mt-4 space-y-2">
										<div className="text-white-200 text-sm">
											<strong>Animation:</strong> GSAP (GreenSock)
										</div>
										<div className="text-white-200 text-sm">
											<strong>3D Graphics:</strong> Three.js
										</div>
										<div className="text-white-200 text-sm">
											<strong>Framework:</strong> Vanilla JavaScript
										</div>
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Project Metrics
									</h3>
									<div className="space-y-3">
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Development Time:
											</span>
											<span className="text-purple text-sm">4 weeks</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Animation Count:
											</span>
											<span className="text-purple text-sm">50+</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Performance Score:
											</span>
											<span className="text-purple text-sm">90+</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Code Lines:
											</span>
											<span className="text-purple text-sm">2,500+</span>
										</div>
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Animation Techniques
									</h3>
									<ul className="text-white-200 text-sm space-y-2">
										<li>• Timeline sequencing</li>
										<li>• Easing functions</li>
										<li>• 3D transformations</li>
										<li>• Scroll triggers</li>
										<li>• Morphing SVGs</li>
										<li>• Particle systems</li>
									</ul>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
									<h3 className="text-white font-semibold mb-4">Recognition</h3>
									<p className="text-white-200 text-sm">
										This project demonstrates expert-level proficiency in modern
										web animation techniques and serves as a showcase piece for
										advanced frontend development capabilities.
									</p>
								</div>
							</div>
						</div>

						{/* Related Projects */}
						<QuickLinks currentPage="projects/zentry-website-clone" />
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
