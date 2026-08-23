import { CONTACT_EMAIL, serviceProducts } from "@/data";

interface StructuredDataItem {
	name: string;
	url: string;
}

interface StructuredDataDetails {
	name?: string;
	description?: string;
	dateCreated?: string;
	url?: string;
	image?: string;
	keywords?: string[];
	sameAs?: string;
	items?: StructuredDataItem[];
}

interface StructuredDataProps {
	type: "person" | "service" | "organization" | "project" | "breadcrumb";
	data?: StructuredDataDetails;
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
					name: "Web Development Products and SEO Services",
					description:
						"Clearly scoped website, e-commerce, event platform, SEO improvement, AI chatbot, and custom web application packages.",
					url: `${baseUrl}/services`,
					provider: {
						"@type": "Person",
						name: "Osifemi Osibemekun",
						url: baseUrl,
					},
					serviceType: "Web Development",
					areaServed: "Worldwide",
					hasOfferCatalog: {
						"@type": "OfferCatalog",
						name: "Website products and SEO packages",
						itemListElement: serviceProducts.map((product) => ({
							"@type": "Offer",
							name: product.title,
							description: product.shortDescription,
							url: `${baseUrl}/services#${product.slug}`,
							priceCurrency: product.price.currency,
							priceSpecification: {
								"@type": "UnitPriceSpecification",
								minPrice: product.price.amount,
								priceCurrency: product.price.currency,
								unitText:
									product.price.unit === "month" ? "MONTH" : "PROJECT",
							},
							itemOffered: {
								"@type": "Service",
								name: product.title,
								description: product.shortDescription,
								serviceType: product.category,
								provider: {
									"@type": "Person",
									name: "Osifemi Osibemekun",
									url: baseUrl,
								},
							},
						})),
					},
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
						email: CONTACT_EMAIL,
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
						url: baseUrl,
					},
					dateCreated: data?.dateCreated,
					url: data?.url,
					image: data?.image,
					mainEntityOfPage: data?.url,
					sameAs: data?.sameAs,
					inLanguage: "en-GB",
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
						data?.items?.map((item, index) => ({
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

	const serializedData = JSON.stringify(getStructuredData()).replace(
		/</g,
		"\\u003c"
	);

	return (
		<script
			id={`structured-data-${type}`}
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: serializedData,
			}}
		/>
	);
};

export default StructuredData;
