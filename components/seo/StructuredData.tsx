"use client";

import Script from "next/script";

interface StructuredDataProps {
	type: "person" | "service" | "organization" | "project" | "breadcrumb";
	data?: any; // Additional data for specific types
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
	const getStructuredData = () => {
		const baseUrl = "https://www.osifemi.dev";

		switch (type) {
			case "person":
				return {
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Osifemi Osibemekun",
					jobTitle: "Full-Stack Web Developer",
					description:
						"Professional full-stack web developer specializing in Next.js, React, TypeScript, and modern web technologies.",
					url: baseUrl,
					image: `${baseUrl}/assets/myface.jpeg`,
					sameAs: [
						"https://github.com/Femlol1",
						"https://www.linkedin.com/in/osifemi/",
						"https://www.instagram.com/osifemi.dev/",
					],
					knowsAbout: [
						"Web Development",
						"Full-Stack Development",
						"Next.js",
						"React",
						"TypeScript",
						"JavaScript",
						"Node.js",
						"Database Design",
						"UI/UX Design",
						"E-commerce Development",
					],
					address: {
						"@type": "PostalAddress",
						addressCountry: "GB",
					},
				};

			case "service":
				return {
					"@context": "https://schema.org",
					"@type": "Service",
					name: "Web Development Services",
					description:
						"Professional web development services including full-stack development, e-commerce solutions, and UI/UX design.",
					provider: {
						"@type": "Person",
						name: "Osifemi Osibemekun",
					},
					serviceType: "Web Development",
					areaServed: "Worldwide",
					offers: [
						{
							"@type": "Offer",
							name: "Starter Package",
							description: "Perfect for small businesses and personal projects",
							price: "500",
							priceCurrency: "GBP",
						},
						{
							"@type": "Offer",
							name: "Professional Package",
							description: "Ideal for growing businesses with advanced needs",
							price: "1200",
							priceCurrency: "GBP",
						},
						{
							"@type": "Offer",
							name: "Enterprise Package",
							description:
								"For large-scale applications and complex requirements",
							price: "2500",
							priceCurrency: "GBP",
						},
					],
				};

			case "organization":
				return {
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					name: "Osifemi Osibemekun Web Development",
					description:
						"Professional web development services specializing in modern web technologies",
					founder: {
						"@type": "Person",
						name: "Osifemi Osibemekun",
					},
					url: baseUrl,
					logo: `${baseUrl}/assets/myface.jpeg`,
					contactPoint: {
						"@type": "ContactPoint",
						contactType: "Customer Service",
						email: "osibemekunosifemi@gmail.com",
					},
					areaServed: "Worldwide",
					serviceArea: "Worldwide",
				};

			case "project":
				return {
					"@context": "https://schema.org",
					"@type": "CreativeWork",
					name: data?.name || "Web Development Projects",
					description:
						data?.description ||
						"Professional web development projects showcasing modern technologies and innovative solutions.",
					creator: {
						"@type": "Person",
						name: "Osifemi Osibemekun",
					},
					dateCreated: data?.dateCreated,
					url: data?.url,
					image: data?.image,
					genre: "Web Development",
					keywords: data?.keywords || [
						"web development",
						"React",
						"Next.js",
						"TypeScript",
					],
				};

			case "breadcrumb":
				return {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement:
						data?.items?.map((item: any, index: number) => ({
							"@type": "ListItem",
							position: index + 1,
							name: item.name,
							item: `https://www.osifemi.dev${item.url}`,
						})) || [],
				};

			default:
				return {};
		}
	};

	return (
		<Script
			id={`structured-data-${type}`}
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(getStructuredData()),
			}}
		/>
	);
};

export default StructuredData;
