import { projects } from "@/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.osifemi.dev";

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact-me`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.5,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
	];

	// Add project pages if they exist as individual routes
	const projectSlugs = [
		"wedding-rsvp-website",
		"events-management-platform",
		"ecommerce-ai-chatbot",
		"zentry-website-clone",
	];

	const projectPages = projectSlugs.map((slug) => ({
		url: `${baseUrl}/projects/${slug}`,
		lastModified: new Date(),
		changeFrequency: "yearly" as const,
		priority: 0.6,
	}));

	// Add video pages for projects that have videos
	const videoPages = projects
		.filter((project) => project.video)
		.map((project) => ({
			url: `${baseUrl}/videos/${project.slug}`,
			lastModified: new Date(),
			changeFrequency: "yearly" as const,
			priority: 0.7,
		}));

	return [...staticPages, ...projectPages, ...videoPages];
}
