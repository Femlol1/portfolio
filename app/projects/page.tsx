import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import QuickLinks from "@/components/shared/QuickLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems, projects } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
	title: "My Projects - Web Development Portfolio",
	description:
		"Explore my web development projects including e-commerce solutions, event management platforms, and modern web applications built with Next.js, React, and TypeScript.",
	keywords: [
		"web development projects",
		"portfolio",
		"Next.js projects",
		"React applications",
		"e-commerce development",
		"event management systems",
		"TypeScript projects",
	],
	openGraph: {
		title: "My Projects - Web Development Portfolio | Osifemi Osibemekun",
		description:
			"Explore my web development projects including e-commerce solutions, event management platforms, and modern web applications.",
		url: "https://osifemi.dev/projects",
	},
	alternates: {
		canonical: "https://osifemi.dev/projects",
	},
};

export default function ProjectsPage() {
	return (
		<>
			<StructuredData
				type="project"
				data={{
					name: "Web Development Projects Portfolio",
					description:
						"Professional web development projects showcasing modern technologies and innovative solutions.",
					keywords: [
						"web development",
						"React",
						"Next.js",
						"TypeScript",
						"e-commerce",
						"event management",
					],
				}}
			/>
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
				<div className="max-w-7xl w-full">
					<FloatingNav navItems={navItems} />
					<Breadcrumb />

					<div className="pt-36">
						<div className="flex justify-center">
							<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
								<h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
									My <span className="text-purple">Projects</span>
								</h1>
								<p className="text-center text-white-200 mt-4 text-lg md:text-xl max-w-3xl">
									Explore my portfolio of web development projects, featuring
									modern technologies, innovative solutions, and exceptional
									user experiences.
								</p>
							</div>
						</div>
					</div>

					<section className="py-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{projects.map((project) => (
								<article
									key={project.id}
									className="bg-black-200 border border-white/[0.1] rounded-lg overflow-hidden hover:border-purple/50 transition-colors duration-300"
								>
									<div className="relative h-64">
										{project.video ? (
											<video
												className="w-full h-full object-cover"
												autoPlay
												muted
												loop
												playsInline
											>
												<source src={project.video} type="video/mp4" />
											</video>
										) : (
											<Image
												src={project.img}
												alt={project.alt || project.title}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										)}
									</div>

									<div className="p-6">
										<h2 className="text-xl font-semibold text-white mb-3">
											{project.title}
										</h2>
										<p className="text-white-200 mb-4 leading-relaxed">
											{project.des}
										</p>

										<div className="flex flex-wrap gap-2 mb-4">
											{project.iconLists.map((icon, index) => (
												<div
													key={index}
													className="w-8 h-8 bg-black-100 rounded-full flex items-center justify-center"
												>
													<Image
														src={icon}
														alt="Technology icon"
														width={16}
														height={16}
													/>
												</div>
											))}
										</div>

										<div className="flex gap-4">
											<Link
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 text-purple hover:text-purple-light transition-colors"
											>
												<FaExternalLinkAlt className="w-4 h-4" />
												<span>Live Demo</span>
											</Link>
										</div>
									</div>
								</article>
							))}
						</div>
					</section>

					<QuickLinks currentPage="projects" />
					<Footer />
				</div>
			</main>
		</>
	);
}
