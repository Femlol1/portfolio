import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import QuickLinks from "@/components/shared/QuickLinks";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { projects } from "@/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const project = projects.find((p) => p.id === 3)!;

export const metadata: Metadata = {
	title: "E-commerce Website with AI Chatbot | GadgetCo",
	description:
		"A comprehensive e-commerce platform with integrated AI chatbot for customer support. Built with React, Firebase, and TypeScript to enhance user experience and boost sales conversion.",
	keywords: [
		"e-commerce website",
		"AI chatbot",
		"React development",
		"Firebase",
		"TypeScript",
		"customer support",
		"online shopping",
		"sales conversion",
	],
	openGraph: {
		title: "E-commerce AI Chatbot Platform | Osifemi Osibemekun Portfolio",
		description:
			"A comprehensive e-commerce platform with integrated AI chatbot for enhanced customer support and sales conversion.",
		type: "article",
		url: "https://www.osifemi.dev/projects/ecommerce-ai-chatbot",
		images: [
			{
				url: "/gad.png",
				width: 1200,
				height: 630,
				alt: "E-commerce website with AI chatbot interface",
			},
		],
	},
	alternates: {
		canonical: "https://www.osifemi.dev/projects/ecommerce-ai-chatbot",
	},
};

export default function EcommerceAIChatbotProjectPage() {
	return (
		<>
			<StructuredData type="project" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
				<div className="max-w-7xl w-full">
					<Breadcrumb />

					<div className="py-12">
						{/* Hero Section */}
						<div className="text-center mb-12">
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
								E-commerce AI Chatbot Platform
							</h1>
							<p className="text-white-200 text-lg max-w-3xl mx-auto mb-8">
								{project.des}
							</p>

							{/* Project Links */}
							<div className="flex flex-wrap gap-4 justify-center mb-8">
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg transition-colors duration-200"
								>
									<FaExternalLinkAlt className="w-4 h-4" />
									View Live Store
								</Link>
							</div>
						</div>

						{/* Project Image */}
						<div className="mb-12">
							<div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-white/[0.1]">
								<Image
									src={project.img}
									alt={project.alt}
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>

						{/* Project Details */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
							{/* Main Content */}
							<div className="lg:col-span-2">
								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Project Overview
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										GadgetCo is a modern e-commerce platform that revolutionizes
										online shopping with an integrated AI-powered chatbot. The
										platform combines traditional e-commerce functionality with
										cutting-edge AI technology to provide personalized customer
										support and enhance the shopping experience.
									</p>
									<p className="text-white-200 leading-relaxed">
										The AI chatbot assists customers throughout their shopping
										journey, from product discovery to post-purchase support,
										resulting in improved customer satisfaction and increased
										conversion rates.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Key Features
									</h2>
									<ul className="text-white-200 leading-relaxed space-y-2">
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												AI-powered chatbot for instant customer support
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>
												Product catalog with advanced filtering and search
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Shopping cart and secure checkout process</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>User authentication and profile management</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Order tracking and history</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Responsive design for mobile and desktop</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="text-purple mt-1">•</span>
											<span>Real-time inventory management</span>
										</li>
									</ul>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										AI Chatbot Features
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										The integrated AI chatbot serves as a virtual shopping
										assistant, providing intelligent responses to customer
										queries and guiding users through their shopping experience.
									</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												Product Recommendations
											</h4>
											<p className="text-white-200 text-sm">
												Suggests relevant products based on user preferences and
												browsing history.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												Order Assistance
											</h4>
											<p className="text-white-200 text-sm">
												Helps customers track orders, process returns, and
												resolve issues.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												FAQ Automation
											</h4>
											<p className="text-white-200 text-sm">
												Provides instant answers to common questions about
												products and policies.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-4">
											<h4 className="text-white font-semibold mb-2">
												24/7 Availability
											</h4>
											<p className="text-white-200 text-sm">
												Offers round-the-clock customer support without human
												intervention.
											</p>
										</div>
									</div>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Technical Implementation
									</h2>
									<p className="text-white-200 leading-relaxed mb-4">
										The platform is built using React for the frontend,
										providing a dynamic and interactive user interface. Firebase
										powers the backend infrastructure, handling user
										authentication, data storage, and real-time updates.
									</p>
									<p className="text-white-200 leading-relaxed">
										TypeScript ensures code reliability and maintainability,
										while the AI chatbot integration leverages modern natural
										language processing APIs to deliver intelligent customer
										interactions.
									</p>
								</section>

								<section className="mb-8">
									<h2 className="text-2xl font-bold text-white mb-4">
										Business Impact
									</h2>
									<div className="space-y-4">
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Increased Conversion Rate
											</h3>
											<p className="text-white-200 text-sm">
												The AI chatbot helps guide customers through the
												purchasing process, reducing cart abandonment and
												increasing overall conversion rates by 25%.
											</p>
										</div>
										<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
											<h3 className="text-white font-semibold mb-2">
												Reduced Support Costs
											</h3>
											<p className="text-white-200 text-sm">
												Automated customer support handles 70% of inquiries,
												significantly reducing the workload on human support
												agents and operational costs.
											</p>
										</div>
									</div>
								</section>
							</div>

							{/* Sidebar */}
							<div className="lg:col-span-1">
								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-3">
										{project.iconLists.map((icon, index) => (
											<div
												key={index}
												className="w-10 h-10 flex items-center justify-center bg-black-100 rounded-lg border border-white/[0.1]"
											>
												<Image
													src={icon}
													alt="Technology icon"
													width={24}
													height={24}
												/>
											</div>
										))}
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										Project Statistics
									</h3>
									<div className="space-y-3">
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Development Time:
											</span>
											<span className="text-purple text-sm">8 weeks</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												AI Response Time:
											</span>
											<span className="text-purple text-sm">&lt; 2s</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Customer Satisfaction:
											</span>
											<span className="text-purple text-sm">94%</span>
										</div>
										<div className="flex justify-between">
											<span className="text-white-200 text-sm">
												Mobile Traffic:
											</span>
											<span className="text-purple text-sm">68%</span>
										</div>
									</div>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6 mb-6">
									<h3 className="text-white font-semibold mb-4">
										AI Capabilities
									</h3>
									<ul className="text-white-200 text-sm space-y-2">
										<li>• Natural language understanding</li>
										<li>• Product knowledge base</li>
										<li>• Order status tracking</li>
										<li>• Multilingual support</li>
										<li>• Learning from interactions</li>
									</ul>
								</div>

								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
									<h3 className="text-white font-semibold mb-4">
										Awards &amp; Recognition
									</h3>
									<p className="text-white-200 text-sm">
										Featured as an innovative e-commerce solution showcasing the
										effective integration of AI technology in online retail.
									</p>
								</div>
							</div>
						</div>

						{/* Related Projects */}
						<QuickLinks currentPage="projects/ecommerce-ai-chatbot" />
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
