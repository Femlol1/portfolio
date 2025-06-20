import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="top-10 left-full h-[80vh] w-[50vw]"
					fill="green"
				/>
				<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="orange" />
			</div>
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>
			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<header>
						<h1 className="sr-only">
							Osifemi Osibemekun - Full-Stack Web Developer
						</h1>
						<TextGenerateEffect
							className="text-center text-[40px] md:text-5xl lg:text-6xl"
							words="Hi, I'm Femi, a Full-Stack Developer"
						/>
					</header>
					<p className="text-center text-white-200 mt-4 text-lg max-w-2xl sr-only">
						Professional full-stack web developer specializing in Next.js,
						React, TypeScript, and modern web technologies. Creating exceptional
						digital experiences.
					</p>
					<a href="#projects" aria-label="View my work and projects">
						<MagicButton
							title="View my work"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
