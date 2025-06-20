import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://www.osifemi.dev";

	return {
		rules: [
			{
				userAgent: "*",
				allow: ["/", "/services", "/contact-me", "/projects/*"],
				disallow: [
					"/api/",
					"/_next/",
					"/admin/",
					"/private/",
					"/*.json$",
					"/tmp/",
				],
			},
			{
				userAgent: "Googlebot",
				allow: ["/", "/services", "/contact-me", "/projects/*"],
				disallow: ["/api/", "/_next/"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
