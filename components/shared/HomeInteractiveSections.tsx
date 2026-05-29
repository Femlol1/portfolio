"use client";

import dynamic from "next/dynamic";

const SectionLoading = ({ id }: { id?: string }) => (
	<section id={id} className="min-h-40 py-20" aria-hidden="true" />
);

const Grid = dynamic(() => import("./Grid"), {
	ssr: false,
	loading: () => <SectionLoading id="about" />,
});
const ProjectsShowcase = dynamic(
	() => import("./3dCard").then((mod) => mod.ProjectsShowcase),
	{
		ssr: false,
		loading: () => <SectionLoading id="projects" />,
	}
);
const ServicesPreview = dynamic(() => import("./ServicesPreview"), {
	ssr: false,
	loading: () => <SectionLoading id="services" />,
});
const PricingSection = dynamic(() => import("./Pricing"), {
	ssr: false,
	loading: () => <SectionLoading />,
});
const Experience = dynamic(() => import("./Experience"), {
	ssr: false,
	loading: () => <SectionLoading />,
});
const Approach = dynamic(() => import("./Approach"), {
	ssr: false,
	loading: () => <SectionLoading />,
});
const FAQ = dynamic(() => import("./FAQ"), {
	ssr: false,
	loading: () => <SectionLoading id="faq" />,
});
const ContactMe = dynamic(() => import("./ContactMe"), {
	ssr: false,
	loading: () => <SectionLoading id="contact" />,
});

const HomeInteractiveSections = () => {
	return (
		<>
			<Grid />
			<ProjectsShowcase />
			<ServicesPreview />
			<PricingSection />
			<Experience />
			<Approach />
			<FAQ />
			<ContactMe />
		</>
	);
};

export default HomeInteractiveSections;
