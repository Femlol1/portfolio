import { projects } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";

interface VideoPageProps {
	params: Promise<{
		slug: string;
	}>;
}

// Generate static params for all video projects
export function generateStaticParams() {
	return projects
		.filter((project) => project.video)
		.map((project) => ({
			slug: project.slug,
		}));
}

// Generate metadata for SEO
export async function generateMetadata({
	params,
}: VideoPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project || !project.video) {
		return {
			title: "Video Not Found",
			robots: {
				index: false,
				follow: false,
			},
			openGraph: null,
			twitter: null,
		};
	}

	const pageUrl = `https://www.osifemi.dev/videos/${project.slug}`;
	const videoUrl = `https://www.osifemi.dev${project.video}`;
	const thumbnailUrl = "https://www.osifemi.dev/social-preview.png";

	return {
		title: `${project.title} - Project Demo Video`,
		description: `Watch the demo video of ${project.title}. ${project.des}`,
		keywords: [
			"project demo",
			"video demonstration",
			project.title.toLowerCase(),
			"web development",
			"portfolio video",
			"project showcase",
		],
		openGraph: {
			title: `${project.title} - Demo Video`,
			description: `Watch the demo video of ${project.title}`,
			type: "video.other",
			url: pageUrl,
			videos: [
				{
					url: videoUrl,
					width: 1900,
					height: 872,
					type: "video/mp4",
				},
			],
			images: [
				{
					url: thumbnailUrl,
					width: 1200,
					height: 630,
					alt: `${project.title} video thumbnail`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} - Demo Video`,
			description: `Watch the demo video of ${project.title}`,
			images: [thumbnailUrl],
		},
		alternates: {
			canonical: pageUrl,
		},
	};
}

export default async function VideoWatchPage({ params }: VideoPageProps) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project || !project.video) {
		notFound();
	}

	// JSON-LD structured data for video
	const videoStructuredData = {
		"@context": "https://schema.org",
		"@type": "VideoObject",
		name: project.videoTitle,
		description: project.des,
		thumbnailUrl: "https://www.osifemi.dev/social-preview.png",
		uploadDate: "2024-12-10T20:18:28Z",
		contentUrl: `https://www.osifemi.dev${project.video}`,
		embedUrl: `https://www.osifemi.dev/videos/${project.slug}`,
		duration: project.videoDuration,
		publisher: {
			"@type": "Person",
			name: "Osifemi Osibemekun",
			url: "https://www.osifemi.dev",
		},
		creator: {
			"@type": "Person",
			name: "Osifemi Osibemekun",
		},
	};

	const serializedVideoData = JSON.stringify(videoStructuredData).replace(
		/</g,
		"\\u003c"
	);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: serializedVideoData,
				}}
			/>

			<main id="main-content" tabIndex={-1} className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
				<div className="max-w-7xl w-full">
					{/* Navigation */}
					<div className="pb-8 pt-24">
						<Link
							href={`/projects/${project.slug}`}
							className="flex items-center gap-2 text-white-200 hover:text-purple transition-colors w-fit"
						>
							<FaArrowLeft className="w-4 h-4" />
							Back to Project Details
						</Link>
					</div>

					{/* Video Section */}
					<div className="py-12">
						<div className="text-center mb-8">
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
								{project.title}
							</h1>
							<p className="text-white-200 text-lg max-w-3xl mx-auto mb-6">
								Project Demo Video
							</p>
						</div>

						{/* Video Player */}
						<div className="mb-12">
							<div className="relative w-full max-w-4xl mx-auto">
								<div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden border border-white/[0.1] bg-black-200">
									<video
										src={project.video}
										className="absolute top-0 left-0 w-full h-full object-contain"
										controls
										preload="none"
										poster={project.img}
									>
										<source src={project.video} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						</div>

						{/* Video Details */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
							{/* Main Content */}
							<div className="lg:col-span-2">
								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										About This Video
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										{project.des}
									</p>
									<p className="text-white-200 leading-relaxed">
										This video demonstrates the key features and functionality
										of the {project.title} project, showcasing the user
										interface, interactions, and technical implementation.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Technologies Showcased
									</h2>
									<div className="flex flex-wrap gap-3">
										{project.iconLists.map((icon, index) => (
											<div
												key={index}
												className="flex items-center gap-2 bg-black-200 border border-white/[0.1] rounded-lg px-3 py-2"
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
												<span className="text-white-200 text-sm capitalize">
													{icon.split("/").pop()?.split(".")[0]}
												</span>
											</div>
										))}
									</div>
								</section>
							</div>

							{/* Sidebar */}
							<div className="lg:col-span-1">
								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Project Links
									</h3>
									<div className="space-y-3">
										<Link
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-purple hover:bg-purple/90 text-black-100 font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
										>
											<FaExternalLinkAlt className="w-3 h-3" />
											View Live Site
										</Link>
										<Link
											href={`/projects/${project.slug}`}
											className="flex items-center gap-2 bg-black-100 hover:bg-black-300 border border-white/[0.1] text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
										>
											Project Details
										</Link>
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
									<h3 className="text-white font-semibold mb-4">Video Info</h3>
									<div className="space-y-2 text-sm text-white-200">
										<p>
											<strong>Duration:</strong> 12 seconds
										</p>
										<p>
											<strong>Quality:</strong> HD
										</p>
										<p>
											<strong>Format:</strong> MP4
										</p>
										<p>
											<strong>Shows:</strong> Live demo & features
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</main>
		</>
	);
}
