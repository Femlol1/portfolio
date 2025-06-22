"use client";

import { projects } from "@/data"; // Assuming your array is in a file named `projects.ts`
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ProjectsShowcase() {
	return (
		<div className="py-20" id="projects">
			<h1 className="heading">
				<span className="text-purple uppercase"> recent PROJECTS</span>
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr min-h-full">
				{projects.map((project) => (
					<CardContainer key={project.id} className="inter-var">
						<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-sm mx-auto rounded-xl p-6 border min-h-[500px] items-stretch flex flex-col">
							<CardItem
								translateZ="50"
								className="text-lg font-bold text-neutral-600 dark:text-white line-clamp-2 leading-tight"
							>
								{project.title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3 leading-relaxed"
							>
								{project.des}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
								{project.video ? (
									<Link
										href={`/videos/${project.slug}`}
										className="block relative group"
									>
										<div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/[0.1]">
											<video
												src={project.video}
												width={project.width}
												height={project.height}
												autoPlay
												loop
												muted
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
											/>

											<div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
												Video Demo
											</div>
										</div>
									</Link>
								) : (
									<Image
										src={project.img}
										height={project.height}
										width={project.width}
										className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
										alt={project.title}
									/>
								)}
							</CardItem>
							<div className="flex-grow"></div>

							{/* Technology Icons */}
							<div className="flex items-center gap-2 mt-4 mb-4">
								{project.iconLists.map((icon, index) => (
									<CardItem key={index} translateZ={20}>
										<div className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
											<Image
												src={icon}
												alt={`Technology: ${
													icon.split("/").pop()?.split(".")[0]
												}`}
												width={20}
												height={20}
												className="object-contain"
											/>
										</div>
									</CardItem>
								))}
							</div>

							{/* Action Buttons */}
							<div className="flex justify-between items-center mt-auto">
								<div className="flex gap-2">
									<CardItem
										translateZ={20}
										as={Link}
										href={`/projects/${project.slug}`}
										className="px-3 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-purple transition-colors"
									>
										More Info →
									</CardItem>
									{project.video && (
										<CardItem
											translateZ={20}
											as={Link}
											href={`/videos/${project.slug}`}
											className="px-3 py-2 rounded-xl text-xs font-normal text-purple hover:text-white transition-colors"
										>
											📹 Watch
										</CardItem>
									)}
								</div>
								<CardItem
									translateZ={20}
									as={Link}
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-purple transition-colors"
								>
									Live Site →
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</div>
	);
}
