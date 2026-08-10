const contentSecurityPolicy = [
	"default-src 'self'",
	"base-uri 'self'",
	"form-action 'self'",
	"frame-ancestors 'none'",
	"object-src 'none'",
	"script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
	"style-src 'self' 'unsafe-inline'",
	"img-src 'self' data: blob:",
	"font-src 'self' data:",
	"media-src 'self'",
	"connect-src 'self' https://vitals.vercel-insights.com",
	"worker-src 'self' blob:",
].join("; ");

const securityHeaders = [
	{
		key: "Content-Security-Policy-Report-Only",
		value: contentSecurityPolicy,
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), geolocation=(), microphone=(), payment=()",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
];

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
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		];
	},
};

export default nextConfig;
