import StructuredData from "@/components/seo/StructuredData";
import ProjectPreviewGallery from "@/components/shared/ProjectPreviewGallery";
import QuickLinks from "@/components/shared/QuickLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { projects } from "@/data";
import { getTechnologyName } from "@/lib/technology";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

export const metadata: Metadata = {
	title: "My Projects - Web Development Portfolio",
	description:
		"Explore web development case studies with dated public-site captures, a delivered-site archive, and a clearly labelled frontend concept.",
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
		url: "https://www.osifemi.dev/projects",
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
		title: "My Projects | Osifemi Osibemekun",
		description:
			"Explore web development case studies built with Next.js, React, and TypeScript.",
		images: ["/social-preview.png"],
	},
	alternates: {
		canonical: "https://www.osifemi.dev/projects",
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
					url: "https://www.osifemi.dev/projects",
					image: "https://www.osifemi.dev/social-preview.png",
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
			<main id="main-content" tabIndex={-1} className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
				<div className="max-w-7xl w-full">
					<Breadcrumb />

					<div className="pt-36">
						<div className="flex justify-center">
							<div className="system-reveal max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
								<h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
									My <span className="text-purple">Projects</span>
								</h1>
								<p className="text-center text-white-200 mt-4 text-lg md:text-xl max-w-3xl">
									Explore dated public-page captures, a delivered-site archive,
									and a clearly labelled unofficial frontend concept.
								</p>
							</div>
						</div>
					</div>

					<section className="py-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{projects.map((project, projectIndex) => (
								<article
									key={project.id}
									className="system-surface system-surface--lift overflow-hidden rounded-2xl border border-white/[0.12] bg-black-200 transition-colors duration-300 hover:border-purple/50 motion-reduce:transition-none"
								>
									<div className="p-4 pb-0 sm:p-5 sm:pb-0">
										<ProjectPreviewGallery
											title={project.title}
											siteLabel={project.siteLabel}
											previews={project.previews}
											status={project.previewStatus}
											priority={projectIndex === 0}
										/>
									</div>

									<div className="p-6">
										<h2 className="text-xl font-semibold text-white mb-3">
											{project.title}
										</h2>
										<p className="text-white-200 mb-4 leading-relaxed">
											{project.des}
										</p>

										<div
											className="mb-4 flex flex-wrap gap-2"
											role="list"
											aria-label="Technologies used"
										>
											{project.iconLists.map((icon) => (
												<div
													key={icon}
													role="listitem"
													className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-black-100"
												>
													<Image
														src={icon}
														alt={`${getTechnologyName(icon)} logo`}
														width={18}
														height={18}
													/>
												</div>
											))}
										</div>

										<div className="flex flex-wrap gap-4">
											<Link
												href={`/projects/${project.slug}`}
												className="flex items-center gap-2 rounded-lg bg-purple px-4 py-2 font-semibold text-black-100 transition-colors hover:bg-purple/90"
											>
												<FaInfoCircle className="w-4 h-4" />
												<span>Read case study</span>
											</Link>
											{project.link && (
												<Link
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 px-2 py-2 text-purple hover:text-purple-light transition-colors"
												>
													<FaExternalLinkAlt className="w-4 h-4" />
													<span>{project.linkLabel ?? "Live site"}</span>
												</Link>
											)}
										</div>
									</div>
								</article>
							))}
						</div>
					</section>

					<QuickLinks currentPage="projects" />
				</div>
			</main>
		</>
	);
}
