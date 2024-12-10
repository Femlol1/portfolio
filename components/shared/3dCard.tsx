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
						<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl p-6 border min-h-[420px] items-stretch flex flex-col">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								{project.title}
							</CardItem>
							<CardItem
								as="p"
								translateZ="60"
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
							>
								{project.des}
							</CardItem>
							<CardItem translateZ="100" className="w-full mt-4">
								{project.video ? (
									<video
										src={project.video}
										height={project.height}
										width={project.width}
										className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
										autoPlay
										loop
									/>
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
							<div className="flex justify-between items-center mt-6">
								<div className="flex space-x-2">
									{project.iconLists.map((icon, index) => (
										<CardItem key={index} translateZ={20} className="h-6 w-6">
											<Image
												src={icon}
												alt={`Icon ${index}`}
												width={24}
												height={24}
												className="h-6 w-6"
											/>
										</CardItem>
									))}
								</div>
								<CardItem
									translateZ={40}
									as={Link}
									href={project.link}
									target="_blank"
									className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
								>
									View Project →
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</div>
	);
}
