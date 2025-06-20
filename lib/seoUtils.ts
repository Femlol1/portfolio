// Performance optimization utilities for SEO and Core Web Vitals

export const preloadCriticalResources = () => {
	// Preload critical images
	if (typeof window !== "undefined") {
		const preloadImage = (src: string) => {
			const link = document.createElement("link");
			link.rel = "preload";
			link.as = "image";
			link.href = src;
			document.head.appendChild(link);
		};

		// Preload hero image and other critical assets
		preloadImage("/assets/myface.jpeg");
		preloadImage("/assets/Blue.jpeg");
	}
};

export const optimizeImages = () => {
	// Image optimization settings for better performance
	return {
		// Use WebP format when possible
		formats: ["image/webp", "image/avif"],
		// Define responsive image sizes
		sizes: {
			mobile: "(max-width: 768px) 100vw",
			tablet: "(max-width: 1200px) 50vw",
			desktop: "33vw",
		},
		// Quality settings
		quality: {
			default: 75,
			thumbnail: 60,
			hero: 85,
		},
	};
};

export const seoKeywords = {
	primary: [
		"full-stack developer",
		"web developer",
		"Next.js developer",
		"React developer",
		"TypeScript developer",
	],
	secondary: [
		"web development services",
		"e-commerce development",
		"custom web applications",
		"UI/UX design",
		"responsive design",
		"database solutions",
		"API development",
	],
	location: [
		"UK web developer",
		"London web developer",
		"freelance developer UK",
	],
	technical: [
		"JavaScript developer",
		"Node.js developer",
		"MongoDB developer",
		"Firebase developer",
		"cloud deployment",
		"modern web technologies",
	],
};

export const generateMetaKeywords = (
	...categories: (keyof typeof seoKeywords)[]
) => {
	return categories.flatMap((category) => seoKeywords[category]).join(", ");
};
