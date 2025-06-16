import ContactMe from "@/components/shared/ContactMe";
import Footer from "@/components/shared/Footer";
import PricingSection from "@/components/shared/Pricing";
import ServicesSection from "@/components/shared/Services";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function ServicesPage() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<div className="pt-36">
					<div className="flex justify-center">
						<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
							<h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
								My <span className="text-purple">Services</span>
							</h1>
							<p className="text-center text-white-200 mt-4 text-lg md:text-xl max-w-3xl">
								I offer comprehensive web development solutions tailored to your
								business needs. From full-stack development to specialized
								consulting, I&apos;m here to bring your vision to life.
							</p>
						</div>
					</div>
				</div>
				<ServicesSection />
				<PricingSection />
				<ContactMe />
				<Footer />
			</div>
		</main>
	);
}
