import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import HomeInteractiveSections from "@/components/shared/HomeInteractiveSections";
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
					<HomeInteractiveSections />
					<Footer />
				</div>
			</main>
		</>
	);
}
