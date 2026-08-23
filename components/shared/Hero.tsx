import { FaLocationArrow } from "react-icons/fa6";
import CVDownloadButton from "../ui/CVDownloadButton";
import MagicButton from "../ui/MagicButton";
import RequestReleaseLoop from "../ui/RequestReleaseLoop";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
	return (
		<div className="orbital-hero relative isolate pb-20 pt-36">
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
			<div className="hero-stage relative z-10 my-20 flex justify-center">
				<div className="flex max-w-[94vw] flex-col items-center justify-center md:max-w-4xl lg:max-w-5xl">
					<div className="hero-system-shell">
						<RequestReleaseLoop />
						<header className="hero-copy relative z-10 mx-auto max-w-3xl text-center">
							<p className="hero-kicker">
								Interfaces, APIs, data and deployment—built as one system
							</p>
							<h1 className="text-center text-[40px] font-bold leading-snug tracking-wide text-black dark:text-white md:text-5xl lg:text-6xl">
								<TextGenerateEffect words="Hi, I'm Femi, a Full-Stack Developer" />
							</h1>
						</header>
					</div>
					<p className="text-center text-white-200 mt-4 text-lg max-w-2xl sr-only">
						UK full-stack web developer creating responsive websites,
						e-commerce stores, event platforms, custom web applications, and
						technical SEO improvements.
					</p>
					<div className="hero-actions mt-6 flex flex-col items-center gap-4 sm:flex-row">
						<a href="#projects" aria-label="View my work and projects">
							<MagicButton
								as="span"
								title="View my work"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</a>
						<CVDownloadButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
