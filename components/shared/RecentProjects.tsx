import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaInfo } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "../ui/3d-pin";

const RecentProjects = () => {
	return (
		<div className="py-20" id="projects">
			<h1 className="heading">
				A small selection of{" "}
				<span className="text-purple"> recent PROJECTS</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
				{projects.map(
					({ id, title, des, img, iconLists, link, slug, width, height }) => (
						<div
							key={id}
							className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
						>
							<PinContainer title={link} href={link}>
								<div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
									<div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
										<Image
											src="/bg.png"
											alt="bg-png"
											width={500}
											height={500}
										/>
									</div>
									<Image
										src={img}
										alt={title}
										width={width}
										height={height}
										className="z-10 absolute bottom-0"
									/>
								</div>
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{title}
								</h1>
								<p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
									{des}
								</p>
								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{iconLists.map((icon, index) => (
											<div
												key={icon}
												className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
												style={{ transform: `translateX(-${5 * index * 2}px)` }}
											>
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
										))}
									</div>
									<div className="flex justify-center items-center">
										<p className="flex lg:text-xl md:text-xs text-sm text-purple">
											Check live site
										</p>
										<FaLocationArrow className="ms-3" color="#CBACF9" />
									</div>
								</div>

								{/* More Info Link */}
								<div className="flex justify-center mt-4">
									<Link
										href={`/projects/${slug}`}
										className="flex items-center gap-2 bg-black-100 hover:bg-black-200 border border-white/[0.1] text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
									>
										<FaInfo className="w-3 h-3" />
										More Info
									</Link>
								</div>
							</PinContainer>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default RecentProjects;
