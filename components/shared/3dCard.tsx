"use client";

import { projects } from "@/data";
import { getTechnologyName } from "@/lib/technology";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import ProjectPreviewGallery from "./ProjectPreviewGallery";

export function ProjectsShowcase() {
	return (
		<section className="py-20" id="projects" aria-labelledby="projects-title">
			<div className="mx-auto max-w-3xl text-center">
				<p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
					Selected work
				</p>
				<h2 className="heading system-reveal" id="projects-title">
					Recent <span className="text-purple">projects</span>
				</h2>
				<p className="mt-5 text-base leading-relaxed text-white-200 sm:text-lg">
					Browse dated public-page captures, a delivered-site archive, and a
					clearly labelled unofficial frontend concept.
				</p>
			</div>

			<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
				{projects.map((project) => (
					<article key={project.id} className="h-full">
						<CardContainer
							className="inter-var h-full w-full"
							containerClassName="h-full py-0"
						>
							<CardBody className="system-surface system-surface--lift relative flex h-full min-h-[610px] w-full flex-col items-stretch rounded-2xl border border-white/[0.12] bg-[#090d24] p-5 sm:p-6">
								<div className="mb-4 flex items-center justify-between gap-4">
									<CardItem
										translateZ={20}
										className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200"
									>
										Case study · {String(project.id).padStart(2, "0")}
									</CardItem>
									{project.video && (
										<CardItem
											translateZ={20}
											className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-purple"
										>
											Motion build
										</CardItem>
									)}
								</div>

								<h3>
									<CardItem
										as={Link}
										href={`/projects/${project.slug}`}
										translateZ={45}
										className="line-clamp-2 text-xl font-bold leading-tight text-white transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple motion-reduce:transition-none"
									>
										{project.title}
									</CardItem>
								</h3>
								<CardItem
									as="p"
									translateZ={50}
									className="mt-2 text-sm leading-relaxed text-white-200"
								>
									{project.des}
								</CardItem>

								<CardItem translateZ={70} className="mt-5 w-full">
									<ProjectPreviewGallery
										title={project.title}
										siteLabel={project.siteLabel}
										previews={project.previews}
										status={project.previewStatus}
									/>
								</CardItem>

								<div className="mt-auto flex items-end justify-between gap-4 pt-5">
									<div
										className="flex flex-wrap items-center gap-2"
										role="list"
										aria-label="Technologies used"
									>
										{project.iconLists.map((icon) => (
											<CardItem key={icon} translateZ={20} role="listitem">
												<div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-black-100">
													<Image
														src={icon}
														alt={`${getTechnologyName(icon)} logo`}
														width={18}
														height={18}
														className="object-contain"
													/>
												</div>
											</CardItem>
										))}
									</div>

								</div>

								<div className={`mt-5 grid gap-3 ${project.link ? "grid-cols-2" : "grid-cols-1"}`}>
									<CardItem
										translateZ={20}
										as={Link}
										href={`/projects/${project.slug}`}
										className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-purple px-3 text-center text-xs font-bold text-black-100 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none"
									>
										Read case study
									</CardItem>
									{project.link && (
										<CardItem
											translateZ={20}
											as={Link}
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex min-h-11 w-full items-center justify-center gap-1 rounded-lg border border-purple/50 px-3 text-center text-xs font-semibold text-purple transition-colors hover:border-purple hover:bg-purple/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple motion-reduce:transition-none"
										>
											{project.linkLabel ?? "Live site"} <span aria-hidden="true">&#8599;</span>
										</CardItem>
									)}
								</div>
							</CardBody>
						</CardContainer>
					</article>
				))}
			</div>
		</section>
	);
}
