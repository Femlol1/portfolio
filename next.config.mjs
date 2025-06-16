/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Add image formats for better optimization
		formats: ["image/webp", "image/avif"],
		// Configure image domains if needed for external images
		// domains: ['example.com'],
		// Add image sizes for responsive images
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// Enable unoptimized images if needed for static export
		unoptimized: false,
	},
	// Ensure static files are served correctly
	trailingSlash: false,
	// Disable x-powered-by header for security
	poweredByHeader: false,
};

export default nextConfig;
