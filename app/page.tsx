import StructuredData from "@/components/seo/StructuredData";
import { ProjectsShowcase } from "@/components/shared/3dCard";
import Approach from "@/components/shared/Approach";
import ContactMe from "@/components/shared/ContactMe";
import Experience from "@/components/shared/Experience";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Grid from "@/components/shared/Grid";
import Hero from "@/components/shared/Hero";
import PricingSection from "@/components/shared/Pricing";
import ServicesPreview from "@/components/shared/ServicesPreview";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
	return (
		<>
			<StructuredData type="person" />
			<StructuredData type="organization" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
				<div className="max-w-7xl w-full">
					<FloatingNav navItems={navItems} />
					<Hero />
					<Grid />
					<ProjectsShowcase />
					{/* <RecentProjects /> */}
					{/* <Clients /> */}
					<ServicesPreview />
					<PricingSection />
					<Experience />
					<Approach />
					<FAQ />
					<ContactMe />
					<Footer />
				</div>
			</main>
		</>
	);
}
