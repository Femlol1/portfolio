import BackButton from "@/components/ui/BackButton";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Metadata } from "next";
import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export const metadata: Metadata = {
	title: "404 - Page Not Found | Osifemi Osibemekun",
	description:
		"The page you're looking for doesn't exist. Explore our portfolio, projects, and services instead.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function NotFound() {
	const words = "Oops! This page seems to have vanished into the digital void.";

	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full min-h-screen flex items-center justify-center">
				<div>
					<Spotlight
						className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
						fill="white"
					/>
					<Spotlight
						className="h-[80vh] w-[50vw] top-10 left-full"
						fill="purple"
					/>
					<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
				</div>

				<div className="relative z-10 text-center">
					{/* 404 Large Text */}
					<div className="mb-8">
						<h1 className="text-[10rem] md:text-[15rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue-500 leading-none opacity-20">
							404
						</h1>
					</div>

					{/* Main Content */}
					<div className="relative -mt-20 md:-mt-32 z-20">
						<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-widest">
							Page Not Found
						</h2>

						<div className="mb-8 max-w-2xl mx-auto">
							<TextGenerateEffect
								words={words}
								className="text-center text-lg md:text-xl text-white-200"
							/>
						</div>

						<p className="text-white-200 text-base md:text-lg mb-12 max-w-xl mx-auto">
							The page you&apos;re looking for might have been moved, deleted,
							or never existed. But don&apos;t worry, there&apos;s plenty more
							to explore!
						</p>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
							<Link href="/">
								<MagicButton
									title="Go Home"
									icon={<FaHome />}
									position="left"
								/>
							</Link>

							<Link href="/projects">
								<MagicButton
									title="View Projects"
									icon={<FaSearch />}
									position="left"
									otherClasses="bg-black-200 border border-white/[0.1] hover:bg-black-300"
								/>
							</Link>
						</div>

						{/* Quick Navigation */}
						<div className="border-t border-white/[0.1] pt-8">
							<p className="text-white-200 text-sm mb-4">
								Or explore these sections:
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link
									href="/projects"
									className="text-purple hover:text-white transition-colors duration-200 text-sm underline"
								>
									Projects
								</Link>
								<Link
									href="/services"
									className="text-purple hover:text-white transition-colors duration-200 text-sm underline"
								>
									Services
								</Link>
								<Link
									href="/contact-me"
									className="text-purple hover:text-white transition-colors duration-200 text-sm underline"
								>
									Contact
								</Link>
							</div>
						</div>

						{/* Back Button */}
						<div className="mt-8">
							<BackButton />
						</div>
					</div>
				</div>

				{/* Background Decoration */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple rounded-full animate-pulse"></div>
					<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
					<div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
					<div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple rounded-full animate-pulse delay-700"></div>
				</div>
			</div>
		</main>
	);
}
