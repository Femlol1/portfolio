export type ServiceProductPrice = {
	amount: number;
	currency: "GBP";
	qualifier: "from" | "fixed";
	unit: "project" | "month";
};

export type ServiceProduct = {
	slug: string;
	title: string;
	category: string;
	group: "build" | "improve" | "operate";
	tier: "product" | "add-on";
	shortDescription: string;
	features: string[];
	seoCoverage: string;
	scopeNote?: string;
	delivery: string;
	price: ServiceProductPrice;
	accent: "violet" | "cyan";
	featured?: boolean;
	spotlight?: boolean;
};

export const serviceProducts: ServiceProduct[] = [
	{
		slug: "starter-website",
		title: "Starter Website",
		category: "Launch",
		group: "build",
		tier: "product",
		shortDescription:
			"A focused, responsive one-page website for a new idea, service, or campaign.",
		features: [
			"One tailored landing page",
			"Contact or enquiry form",
			"Analytics and Search Console setup",
			"One revision and launch support",
		],
		seoCoverage:
			"Semantic headings, page title and description, canonical URL, sitemap entry, and social sharing metadata.",
		delivery: "1–2 weeks",
		price: {
			amount: 150,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
	},
	{
		slug: "business-website",
		title: "Business Website",
		category: "Grow",
		group: "build",
		tier: "product",
		shortDescription:
			"A professional multi-page website that makes your services easy to find and understand.",
		features: [
			"Up to five tailored pages",
			"Enquiry forms and analytics",
			"Simple content management handover",
			"30 days of post-launch support",
		],
		seoCoverage:
			"Page-level metadata, internal linking, image optimisation, Search Console, and local business schema where relevant.",
		delivery: "2–4 weeks",
		price: {
			amount: 500,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "cyan",
		featured: true,
	},
	{
		slug: "booking-deposit-system",
		title: "Booking & Deposit System",
		category: "Bookings",
		group: "build",
		tier: "product",
		shortDescription:
			"Turn service enquiries into confirmed appointments with scheduling, deposits, and automated updates.",
		features: [
			"Booking page with up to five services",
			"One calendar or scheduling-platform integration",
			"Stripe deposit or full-payment setup",
			"Confirmation and reminder messages",
			"Lightweight administration and handover",
		],
		seoCoverage:
			"Crawlable service pages, relevant Service or LocalBusiness schema, mobile performance, and organic booking-conversion tracking.",
		scopeNote:
			"Scheduling subscriptions, payment-processing fees, and a fully custom booking engine are quoted separately.",
		delivery: "2–3 weeks",
		price: {
			amount: 600,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
		featured: true,
	},
	{
		slug: "seo-improvement-sprint",
		title: "SEO Improvement Sprint",
		category: "Search",
		group: "improve",
		tier: "product",
		shortDescription:
			"A practical technical and on-page SEO upgrade for an existing website, with the highest-impact fixes implemented.",
		features: [
			"Audit and implementation for up to 15 pages",
			"Titles, descriptions, headings, and internal links",
			"Canonicals, structured data, sitemap, and robots review",
			"Image and page-speed improvements",
			"Search Console setup and action report",
		],
		seoCoverage:
			"Covers technical foundations and on-page improvements. Search rankings depend on competition, content, authority, and time, so rankings are never guaranteed.",
		delivery: "1–2 weeks",
		price: {
			amount: 250,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "cyan",
		featured: true,
		spotlight: true,
	},
	{
		slug: "website-redesign-sprint",
		title: "Website Redesign Sprint",
		category: "Improve",
		group: "improve",
		tier: "product",
		shortDescription:
			"A focused visual, mobile, accessibility, and performance refresh for an existing website.",
		features: [
			"Audit and refresh of up to five pages",
			"Mobile and accessibility improvements",
			"Performance tuning",
			"Existing content and URLs preserved where possible",
		],
		seoCoverage:
			"Redirect and canonical review, heading cleanup, metadata refresh, image optimisation, and Core Web Vitals improvements.",
		delivery: "1–3 weeks",
		price: {
			amount: 350,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
	},
	{
		slug: "seo-safe-website-migration",
		title: "SEO-Safe Website Migration",
		category: "Migration",
		group: "improve",
		tier: "product",
		shortDescription:
			"Move an existing website, domain, host, or CMS while protecting important pages and search signals.",
		features: [
			"Backup and transfer of up to 25 content pages",
			"URL inventory, mapping, and permanent redirects",
			"DNS, SSL, canonical, and internal-link checks",
			"Updated sitemap and Search Console setup",
			"14 days of post-launch crawl monitoring",
		],
		seoCoverage:
			"Preserves valuable URLs where possible, maps changed URLs, tests redirects, and monitors indexing after launch. Temporary search fluctuations can still occur.",
		scopeNote:
			"A visual redesign, new copy, email migration, and complex application data are not included.",
		delivery: "1–2 weeks",
		price: {
			amount: 450,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "cyan",
	},
	{
		slug: "accessibility-audit-fix",
		title: "Accessibility Audit & Fix",
		category: "Accessibility",
		group: "improve",
		tier: "product",
		shortDescription:
			"Find and repair high-impact barriers that prevent people from using an existing website confidently.",
		features: [
			"Review of up to five page templates and one key journey",
			"Keyboard, focus, contrast, and form improvements",
			"Heading, landmark, link, and alt-text review",
			"Screen-reader smoke test",
			"Prioritised WCAG 2.2 report and handover",
		],
		seoCoverage:
			"Improves semantic structure, descriptive links, image alternatives, navigation, and usability without treating accessibility as an SEO shortcut.",
		scopeNote:
			"This is an improvement sprint, not formal certification or a legal-compliance guarantee. Third-party widgets may need separate work.",
		delivery: "1–2 weeks",
		price: {
			amount: 450,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
	},
	{
		slug: "event-rsvp-platform",
		title: "Event & RSVP Platform",
		category: "Events",
		group: "build",
		tier: "product",
		shortDescription:
			"A branded event website with registration, guest management, and clear attendee updates.",
		features: [
			"Custom event pages and schedule",
			"RSVP or registration workflow",
			"Guest management and confirmations",
			"Mobile-first attendee experience",
		],
		seoCoverage:
			"Event schema, social share cards, fast mobile pages, and indexability controls for private or public events.",
		delivery: "3–5 weeks",
		price: {
			amount: 600,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "cyan",
	},
	{
		slug: "ecommerce-store",
		title: "E-commerce Store",
		category: "Commerce",
		group: "build",
		tier: "product",
		shortDescription:
			"A streamlined online shop with the core tools needed to present products and take orders.",
		features: [
			"Catalogue setup for up to 20 products",
			"Basket, checkout, and one payment provider",
			"Order emails and administration handover",
			"Sales and conversion analytics",
		],
		seoCoverage:
			"Product structured data, search-friendly product and category pages, product sitemap coverage, and social share cards.",
		delivery: "4–6 weeks",
		price: {
			amount: 800,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
	},
	{
		slug: "ai-chatbot-integration",
		title: "AI Chatbot Integration",
		category: "Automation",
		group: "operate",
		tier: "product",
		shortDescription:
			"A website assistant that answers common questions, guides visitors, and captures qualified enquiries.",
		features: [
			"Training from up to 25 pages or documents",
			"FAQ, product, or service guidance",
			"Lead capture and human hand-off",
			"Basic conversation analytics",
		],
		seoCoverage:
			"A lightweight integration that preserves crawlable page content, accessible fallbacks, and loading performance.",
		delivery: "1–2 weeks",
		price: {
			amount: 500,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "cyan",
	},
	{
		slug: "crm-workflow-automation",
		title: "CRM & Workflow Automation",
		category: "Operations",
		group: "operate",
		tier: "product",
		shortDescription:
			"Connect enquiries, bookings, and customer updates so routine follow-up happens reliably.",
		features: [
			"Connection to one CRM or operations tool",
			"Up to two lead or customer workflows",
			"Lead routing and automated acknowledgements",
			"Email, spreadsheet, or team-notification integration",
			"Error logging, testing, and handover",
		],
		seoCoverage:
			"Tracks organic lead sources and conversions, keeps form embeds lightweight, and prevents private or thank-you pages from being indexed where appropriate.",
		scopeNote:
			"Third-party subscriptions, complex data cleanup, and more than two workflows are quoted separately.",
		delivery: "1–3 weeks",
		price: {
			amount: 600,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
	},
	{
		slug: "web-app-mvp",
		title: "Custom Web App MVP",
		category: "Product",
		group: "build",
		tier: "product",
		shortDescription:
			"A launch-ready first version of a digital product built around its most important workflow.",
		features: [
			"Authentication and database setup",
			"Up to three core user workflows",
			"Responsive interface and simple administration",
			"Deployment and technical handover",
		],
		seoCoverage:
			"Technical SEO for public marketing pages; private and authenticated screens are kept out of search results.",
		delivery: "4–8 weeks",
		price: {
			amount: 1000,
			currency: "GBP",
			qualifier: "from",
			unit: "project",
		},
		accent: "violet",
		featured: true,
	},
	{
		slug: "website-care",
		title: "Website Care",
		category: "Maintain",
		group: "operate",
		tier: "product",
		shortDescription:
			"Ongoing technical care that keeps an existing website healthy after launch.",
		features: [
			"Updates and security checks",
			"Uptime and error monitoring",
			"Up to one hour of small changes each month",
			"Monthly health report",
		],
		seoCoverage:
			"Monthly crawl, indexing, metadata, and performance checks. Content campaigns and link outreach are quoted separately.",
		delivery: "Ongoing",
		price: {
			amount: 75,
			currency: "GBP",
			qualifier: "from",
			unit: "month",
		},
		accent: "cyan",
	},
];

export const formatServiceProductPrice = (product: ServiceProduct) =>
	new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: product.price.currency,
		maximumFractionDigits: 0,
	}).format(product.price.amount);

export const getServiceProductBySlug = (slug: string) =>
	serviceProducts.find((product) => product.slug === slug);
