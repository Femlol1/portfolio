import { projects } from "@/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.osifemi.dev";
	const projectModifiedDates: Record<string, string> = {
		"wedding-rsvp-website": "2025-06-22",
		"events-management-platform": "2025-06-22",
		"ecommerce-ai-chatbot": "2025-06-22",
		"zentry-website-clone": "2025-06-29",
	};

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: "2026-08-23",
			changeFrequency: "monthly" as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: "2026-08-03",
			changeFrequency: "weekly" as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: "2026-08-23",
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact-me`,
			lastModified: "2026-08-23",
			changeFrequency: "yearly" as const,
			priority: 0.5,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: "2025-06-21",
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: "2025-06-21",
			changeFrequency: "yearly" as const,
			priority: 0.3,
		},
	];

	const projectPages = projects.map((project) => ({
		url: `${baseUrl}/projects/${project.slug}`,
		lastModified: projectModifiedDates[project.slug] ?? "2025-06-22",
		changeFrequency: "yearly" as const,
		priority: 0.6,
	}));

	// Add video pages for projects that have videos
	const videoPages = projects
		.filter((project) => project.video)
		.map((project) => ({
			url: `${baseUrl}/videos/${project.slug}`,
			lastModified: "2025-06-22",
			changeFrequency: "yearly" as const,
			priority: 0.7,
		}));

	return [...staticPages, ...projectPages, ...videoPages];
}
