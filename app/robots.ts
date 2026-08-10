import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://www.osifemi.dev";

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/admin/", "/private/", "/tmp/"],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
