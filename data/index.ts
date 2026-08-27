export const navItems = [
	{ name: "About", link: "/#about" },
	{ name: "Projects", link: "/projects" },
	{ name: "Services", link: "/services" },
	// { name: "Testimonials", link: "#testimonials" },
	{ name: "Contact", link: "/contact-me" },
	{ name: "CV", link: "/Osifemi-Osibemekun-CV.pdf", external: true },
];

export const CONTACT_EMAIL = "osibemekunosifemi@gmail.com";

export const gridItems = [
	{
		id: 1,
		title: "You stay in the loop from brief to launch.",
		description: "Clear decisions, regular updates, no black-box handoffs.",
		className:
			"min-h-[22rem] sm:min-h-[28rem] lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "",
		imgalt: "",
		spareImg: "",
		width: 500,
		height: 500,
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		imgalt: "",
		img: "",
		spareImg: "",
		width: 500,
		height: 500,
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		imgalt: "",
		spareImg: "",
		width: 500,
		height: 500,
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		imgalt: "tech stack",
		spareImg: "/b4.svg",
		width: 500,
		height: 500,
	},

	{
		id: 5,
		title: "Currently building a ticketing platform",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		imgalt: "",
		spareImg: "/grid.svg",
		width: 500,
		height: 500,
	},
	{
		id: 6,
		title: "Does starting a project with me sound interesting?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		imgalt: "",
		spareImg: "",
		width: 500,
		height: 500,
	},
];

export type ProjectPreview = {
	src: string;
	alt: string;
	label: string;
	href?: string;
};

export type PortfolioProject = {
	id: number;
	title: string;
	des: string;
	img: string;
	alt: string;
	iconLists: string[];
	link?: string;
	linkLabel?: string;
	slug: string;
	width: number;
	height: number;
	siteLabel: string;
	previewStatus: {
		label: string;
		dateTime?: string;
	};
	previews: ProjectPreview[];
	video?: string;
	videoTitle?: string;
	videoDuration?: string;
};

export const projects: PortfolioProject[] = [
	{
		id: 1,
		title: "Wedding RSVP Website",
		des: "Created a dynamic wedding website with RSVP management, guest tracking, and beautiful responsive design for seamless user experience.",
		img: "/to.png",
		alt: "Wedding RSVP website homepage showing elegant design and RSVP functionality",
		iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
		slug: "wedding-rsvp-website",
		width: 500,
		height: 500,
		siteLabel: "Client project",
		previewStatus: { label: "Delivered-site archive" },
		previews: [
			{
				src: "/to.png",
				alt: "Archived delivered wedding RSVP website homepage",
				label: "Delivered site",
			},
		],
	},
	{
		id: 2,
		title: "Events Management Website",
		des: "Developed a full-featured events management platform using Next.js, focusing on responsive design, seamless user interactions, and optimized performance.",
		img: "/projects/events-management-platform/home.jpg",
		alt: "Kunle's Games Night homepage for London social events, captured in August 2026",
		iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/mongodb.svg"],
		link: "https://www.kunlesgamesnight.com/",
		linkLabel: "Live platform",
		slug: "events-management-platform",
		width: 500,
		height: 500,
		siteLabel: "kunlesgamesnight.com",
		previewStatus: {
			label: "Captured 23 Aug 2026",
			dateTime: "2026-08-23",
		},
		previews: [
			{
				src: "/projects/events-management-platform/home.jpg",
				alt: "Kunle's Games Night homepage with the London events hero and booking calls to action",
				label: "Home",
				href: "https://www.kunlesgamesnight.com/",
			},
			{
				src: "/projects/events-management-platform/events.jpg",
				alt: "Kunle's Games Night events catalogue with search, filters, and event cards, captured in August 2026",
				label: "Events",
				href: "https://www.kunlesgamesnight.com/all-events",
			},
		],
	},
	{
		id: 3,
		title: "E-commerce Website with an AI Chatbot",
		des: "Built a demo e-commerce platform with an integrated customer-support chatbot, creating a smoother product discovery and shopping journey.",
		img: "/projects/ecommerce-ai-chatbot/storefront.jpg",
		alt: "GadgetCo storefront homepage with a modern product hero, captured in August 2026",
		iconLists: ["/re.svg", "/firebase.svg", "/ts.svg", "/c.svg"],
		link: "https://gadgetco-3794d.web.app/home",
		linkLabel: "Live demo",
		slug: "ecommerce-ai-chatbot",
		width: 500,
		height: 500,
		siteLabel: "gadgetco-3794d.web.app",
		previewStatus: {
			label: "Captured 23 Aug 2026",
			dateTime: "2026-08-23",
		},
		previews: [
			{
				src: "/projects/ecommerce-ai-chatbot/storefront.jpg",
				alt: "GadgetCo storefront homepage with the AI assistant minimised",
				label: "Storefront",
				href: "https://gadgetco-3794d.web.app/home",
			},
			{
				src: "/projects/ecommerce-ai-chatbot/ai-assistant.jpg",
				alt: "GadgetCo storefront with the customer support AI assistant open",
				label: "AI support",
				href: "https://gadgetco-3794d.web.app/home",
			},
		],
	},
	{
		id: 4,
		title: "Zentry Website Clone",
		des: "Built an unofficial Zentry-inspired frontend study with GSAP animations and Three.js effects. Not affiliated with or endorsed by Zentry.",
		img: "/projects/zentry-website-clone/home.jpg",
		alt: "Zentry animation concept hero with game artwork and bold typography, captured in August 2026",
		video: "/zenrty.mp4",
		videoTitle: "Zentry Clone - Animation Demo",
		videoDuration: "PT12S",
		width: 500,
		height: 500,
		iconLists: ["/gsap.svg", "/three.svg", "/re.svg", "/ts.svg"],
		link: "https://animated-xi.vercel.app/",
		linkLabel: "Live concept",
		slug: "zentry-website-clone",
		siteLabel: "animated-xi.vercel.app",
		previewStatus: {
			label: "Captured 23 Aug 2026 · Concept",
			dateTime: "2026-08-23",
		},
		previews: [
			{
				src: "/projects/zentry-website-clone/home.jpg",
				alt: "Zentry-inspired animation concept landing hero",
				label: "Hero",
				href: "https://animated-xi.vercel.app/",
			},
			{
				src: "/projects/zentry-website-clone/about.jpg",
				alt: "Zentry-inspired animation concept about section with oversized typography",
				label: "About",
				href: "https://animated-xi.vercel.app/#about",
			},
		],
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Next.js Developer",
		desc: "Developed a responsive events management platform, enhancing UX across various devices.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
		width: 500,
		height: 500,
	},
	{
		id: 2,
		title: "Curriculum Consultant - University of Leicester",
		desc: "Enhanced course curricula and collaborated with academic staff to improve teaching methods.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp2.svg",
		width: 500,
		height: 500,
	},
	{
		id: 3,
		title: "Freelance App Dev Project",
		desc: "Created an E-commerce application, from initial concept to deployment.",
		className: "md:col-span-2", // change to md:col-span-2
		thumbnail: "/exp3.svg",
		width: 500,
		height: 500,
	},
	{
		id: 4,
		title: "Lead Frontend Developer",
		desc: "Developed and maintained user-facing features using modern frontend technologies.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
		width: 500,
		height: 500,
	},
];

export const services = [
	{
		id: 1,
		title: "Full-Stack Web Development",
		description:
			"End-to-end web application development using modern technologies like Next.js, React, TypeScript, and Node.js. From concept to deployment.",
		features: [
			"Custom web applications",
			"Responsive design across all devices",
			"Database integration & management",
			"API development & integration",
			"Performance optimization",
		],
		icon: "/next.svg",
		gradient: "from-blue-500 to-purple-600",
	},
	{
		id: 2,
		title: "E-commerce Solutions",
		description:
			"Complete e-commerce platforms with payment integration, inventory management, and admin dashboards. Built for scalability and performance.",
		features: [
			"Custom shopping cart functionality",
			"Payment gateway integration",
			"Inventory management systems",
			"Admin dashboards",
			"AI-powered chatbots for customer support",
		],
		icon: "/s.svg",
		gradient: "from-green-500 to-teal-600",
	},
	{
		id: 3,
		title: "Events Management Systems",
		description:
			"Comprehensive event management platforms for weddings, corporate events, and community gatherings with RSVP functionality and real-time updates.",
		features: [
			"Event registration & RSVP systems",
			"Real-time event updates",
			"Guest management",
			"Custom event websites",
			"Integration with payment systems",
		],
		icon: "/exp1.svg",
		gradient: "from-orange-500 to-red-600",
	},
	{
		id: 4,
		title: "UI/UX Design & Animation",
		description:
			"Modern, engaging user interfaces with smooth animations using GSAP, Framer Motion, and Three.js for immersive user experiences.",
		features: [
			"Interactive 3D animations",
			"Responsive design systems",
			"Modern UI/UX principles",
			"GSAP & Three.js animations",
			"Brand-consistent design",
		],
		icon: "/three.svg",
		gradient: "from-purple-500 to-pink-600",
	},
	{
		id: 5,
		title: "Database & Backend Solutions",
		description:
			"Robust backend systems with database design, API development, and cloud integration for scalable applications.",
		features: [
			"Database design & optimization",
			"RESTful API development",
			"Cloud deployment & hosting",
			"Authentication & security",
			"Real-time data synchronization",
		],
		icon: "/mongodb.svg",
		gradient: "from-cyan-500 to-blue-600",
	},
	{
		id: 6,
		title: "Maintenance & Support",
		description:
			"Ongoing maintenance, updates, and technical support for existing applications. Keep your applications running smoothly and securely.",
		features: [
			"Regular updates & patches",
			"Performance monitoring",
			"Security audits",
			"Bug fixes & troubleshooting",
			"Priority technical support",
		],
		icon: "/git.svg",
		gradient: "from-indigo-500 to-purple-600",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		alt: "github",
		link: "https://github.com/Femlol1",
		width: 20,
		height: 20,
		title: "github",
	},
	{
		id: 2,
		img: "/insta.svg",
		alt: "instagram",
		link: "https://www.instagram.com/osifemi.dev/",
		width: 20,
		height: 20,
		title: "instagram",
	},
	{
		id: 3,
		img: "/link.svg",
		alt: "linkedin",
		link: "https://www.linkedin.com/in/osifemi/",
		width: 20,
		height: 20,
		title: "linkedin",
	},
];

export {
	formatServiceProductPrice,
	getServiceProductBySlug,
	serviceProducts,
} from "./serviceProducts";
export type { ServiceProduct, ServiceProductPrice } from "./serviceProducts";
