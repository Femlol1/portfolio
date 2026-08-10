import { workExperience } from "@/data";
import Image from "next/image";
import { Button } from "../ui/moving-border";

const Experience = () => {
	return (
		<section aria-labelledby="experience-heading" className="py-20" id="experience">
			<h2 className="heading system-reveal" id="experience-heading">
				My <span className="text-purple"> work experience </span>
			</h2>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((card) => (
					<Button
						key={card.id}
						as="article"
						aria-labelledby={`experience-${card.id}-title`}
						duration={10000 + card.id * 1500}
						borderRadius="1.75rem"
						containerClassName="system-surface--lift"
						className="flex-1 text-white border-neutral-200 dark:border-slate-800 "
					>
						<div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
							<Image
								src={card.thumbnail}
								alt=""
								width={card.width}
								height={card.height}
								className="lg:w-32 md:w-20 w-16"
							/>
							<div className="lg:ms-5">
								<h3
									id={`experience-${card.id}-title`}
									className="text-start text-xl font-bold md:text-2xl"
								>
									{card.title}
								</h3>
								<p className="text-start text-white-100 mt-3 font-semibold">
									{card.desc}
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</section>
	);
};

export default Experience;
