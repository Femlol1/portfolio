import { ProjectsShowcase } from "./3dCard";
import Approach from "./Approach";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import FAQ from "./FAQ";
import Grid from "./Grid";
import PricingSection from "./Pricing";
import ServicesPreview from "./ServicesPreview";

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
