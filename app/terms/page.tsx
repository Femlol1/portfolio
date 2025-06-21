import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"Terms of Service for Osifemi Osibemekun's web development services. Read my terms and conditions for professional web development projects and services.",
	keywords: [
		"terms of service",
		"web development terms",
		"service agreement",
		"project terms",
		"legal terms",
		"web developer terms",
	],
	openGraph: {
		title: "Terms of Service | Osifemi Osibemekun",
		description:
			"Terms of Service for professional web development services. Clear terms and conditions for project agreements.",
		type: "website",
		url: "https://www.osifemi.dev/terms",
	},
	alternates: {
		canonical: "https://www.osifemi.dev/terms",
	},
};

export default function TermsPage() {
	return (
		<>
			<StructuredData type="service" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
				<div className="max-w-4xl w-full">
					<Breadcrumb />

					<div className="py-12">
						<div className="text-center mb-12">
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
								Terms of Service
							</h1>
							<p className="text-white-200 text-lg max-w-3xl mx-auto">
								Please read these terms and conditions carefully before using my
								web development services.
							</p>
							<p className="text-white-200 text-sm mt-4">
								Last updated:{" "}
								{new Date().toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
						</div>

						<div className="prose prose-invert max-w-none">
							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									1. Acceptance of Terms
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									By engaging my web development services, you agree to be bound
									by these Terms of Service. If you do not agree to these terms,
									please do not proceed with any project or service request.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									2. Services Provided
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									I provide professional web development services including but
									not limited to:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Custom website development</li>
									<li>Web application development</li>
									<li>E-commerce solutions</li>
									<li>Website maintenance and support</li>
									<li>Performance optimization</li>
									<li>Technical consulting</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									3. Project Agreement
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Each project begins with a detailed consultation to understand
									your requirements. A formal project agreement will be provided
									outlining:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Project scope and deliverables</li>
									<li>Timeline and milestones</li>
									<li>Payment terms and schedule</li>
									<li>Revision and change request policies</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									4. Payment Terms
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Payment terms will be specified in the project agreement.
									Generally:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>50% deposit required before project commencement</li>
									<li>Remaining balance due upon project completion</li>
									<li>
										Additional work outside the original scope will be quoted
										separately
									</li>
									<li>Late payments may incur additional fees</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									5. Intellectual Property
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Upon full payment, you will own the rights to the final
									delivered work. However:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>I retain the right to use the work in my portfolio</li>
									<li>
										Third-party assets (fonts, images, plugins) remain under
										their respective licenses
									</li>
									<li>
										Any custom frameworks or tools I develop may be reused in
										future projects
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									6. Client Responsibilities
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									To ensure project success, clients are responsible for:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Providing clear project requirements and feedback</li>
									<li>Supplying necessary content, images, and materials</li>
									<li>Making timely decisions and approvals</li>
									<li>Providing access to necessary accounts and systems</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									7. Warranties and Limitations
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									I strive to deliver high-quality work but cannot guarantee:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Specific search engine rankings or traffic results</li>
									<li>Compatibility with all future browser updates</li>
									<li>Uninterrupted website operation (hosting-dependent)</li>
								</ul>
								<p className="text-white-200 leading-relaxed mb-4">
									I provide a 30-day warranty for bug fixes on delivered work
									under normal usage conditions.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									8. Limitation of Liability
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									My liability is limited to the total amount paid for the
									specific project. I am not liable for indirect, incidental, or
									consequential damages.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									9. Termination
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Either party may terminate the project agreement with written
									notice. In case of termination:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>
										Payment is due for work completed up to termination date
									</li>
									<li>
										Completed work files will be delivered upon full payment
									</li>
									<li>Deposits are non-refundable</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									10. Changes to Terms
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									I reserve the right to update these terms at any time. Changes
									will be posted on this page with an updated effective date.
									Continued use of my services constitutes acceptance of revised
									terms.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									11. Contact Information
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									If you have questions about these Terms of Service, please
									contact me:
								</p>
								<div className="bg-black-200 border border-white/[0.1] rounded-lg p-6">
									<p className="text-white-200">
										<strong className="text-white">Email:</strong>{" "}
										osibemekunosifemi@gmail.com
									</p>
									<p className="text-white-200 mt-2">
										<strong className="text-white">Website:</strong>{" "}
										https://www.osifemi.dev/contact-me
									</p>
								</div>
							</section>
						</div>
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
