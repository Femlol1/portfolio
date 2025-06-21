import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Privacy Policy for Osifemi Osibemekun's website and web development services. Learn how we collect, use, and protect your personal information.",
	keywords: [
		"privacy policy",
		"data protection",
		"personal information",
		"cookies policy",
		"data collection",
		"privacy rights",
	],
	openGraph: {
		title: "Privacy Policy | Osifemi Osibemekun",
		description:
			"Privacy Policy outlining how we handle and protect your personal information and data.",
		type: "website",
		url: "https://www.osifemi.dev/privacy",
	},
	alternates: {
		canonical: "https://www.osifemi.dev/privacy",
	},
};

export default function PrivacyPage() {
	return (
		<>
			<StructuredData type="service" />
			<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
				<div className="max-w-4xl w-full">
					<Breadcrumb />

					<div className="py-12">
						<div className="text-center mb-12">
							<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
								Privacy Policy
							</h1>
							<p className="text-white-200 text-lg max-w-3xl mx-auto">
								Your privacy is important to us. This policy explains how we
								collect, use, and protect your information.
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
									1. Information We Collect
								</h2>

								<h3 className="text-xl font-semibold text-white mb-3">
									Information You Provide
								</h3>
								<p className="text-white-200 leading-relaxed mb-4">
									When you contact me or engage my services, we may collect:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Name and contact information (email, phone number)</li>
									<li>Company information and job title</li>
									<li>Project requirements and specifications</li>
									<li>Communication preferences</li>
								</ul>

								<h3 className="text-xl font-semibold text-white mb-3">
									Information Collected Automatically
								</h3>
								<p className="text-white-200 leading-relaxed mb-4">
									When you visit my website, we automatically collect:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>IP address and browser information</li>
									<li>Pages visited and time spent on site</li>
									<li>Referring website information</li>
									<li>Device and operating system information</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									2. How We Use Your Information
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									We use the information we collect to:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>
										Respond to your inquiries and provide requested services
									</li>
									<li>Communicate about projects and provide updates</li>
									<li>Improve my website and services</li>
									<li>
										Send relevant information about my services (with your
										consent)
									</li>
									<li>Comply with legal obligations</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									3. Information Sharing and Disclosure
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									We do not sell, trade, or rent your personal information to
									third parties. We may share your information only in the
									following circumstances:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>
										<strong>Service Providers:</strong> With trusted third-party
										services (hosting, analytics) that help me operate our
										website
									</li>
									<li>
										<strong>Legal Requirements:</strong> When required by law or
										to protect my rights
									</li>
									<li>
										<strong>Business Transfers:</strong> In the event of a
										business sale or merger
									</li>
									<li>
										<strong>With Your Consent:</strong> When you explicitly
										agree to information sharing
									</li>
								</ul>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									4. Cookies and Tracking Technologies
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Our website uses cookies and similar technologies to:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Remember your preferences and settings</li>
									<li>Analyze website traffic and usage patterns</li>
									<li>Improve user experience and website functionality</li>
								</ul>
								<p className="text-white-200 leading-relaxed mb-4">
									You can control cookies through your browser settings.
									However, disabling cookies may affect website functionality.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									5. Data Security
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									We implement appropriate security measures to protect your
									personal information:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>SSL encryption for data transmission</li>
									<li>Secure hosting and storage solutions</li>
									<li>Regular security updates and monitoring</li>
									<li>Limited access to personal information</li>
								</ul>
								<p className="text-white-200 leading-relaxed mb-4">
									While we strive to protect your information, no method of
									transmission over the internet is 100% secure.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									6. Data Retention
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									We retain your personal information only as long as necessary
									to:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>Provide ongoing services and support</li>
									<li>Comply with legal obligations</li>
									<li>Resolve disputes and enforce agreements</li>
								</ul>
								<p className="text-white-200 leading-relaxed mb-4">
									Project-related data is typically retained for 3 years after
									project completion for support purposes.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									7. Your Rights and Choices
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									You have the right to:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>
										<strong>Access:</strong> Request a copy of your personal
										information
									</li>
									<li>
										<strong>Update:</strong> Correct or update your information
									</li>
									<li>
										<strong>Delete:</strong> Request deletion of your personal
										information
									</li>
									<li>
										<strong>Opt-out:</strong> Unsubscribe from marketing
										communications
									</li>
									<li>
										<strong>Portability:</strong> Request your data in a
										portable format
									</li>
								</ul>
								<p className="text-white-200 leading-relaxed mb-4">
									To exercise these rights, please contact me using the
									information provided below.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									8. Third-Party Services
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Our website may use third-party services that have their own
									privacy policies:
								</p>
								<ul className="text-white-200 leading-relaxed mb-4 list-disc pl-6">
									<li>
										<strong>Analytics:</strong> Google Analytics for website
										usage analysis
									</li>
									<li>
										<strong>Hosting:</strong> Vercel for website hosting and
										performance
									</li>
									<li>
										<strong>Email:</strong> Email service providers for
										communication
									</li>
								</ul>
								<p className="text-white-200 leading-relaxed mb-4">
									We encourage you to review the privacy policies of these
									third-party services.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									9. International Data Transfers
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Your information may be transferred to and processed in
									countries other than your own. We ensure appropriate
									safeguards are in place to protect your data during
									international transfers.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									10. Children&apos;s Privacy
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									Our services are not directed to children under 18 years of
									age. We do not knowingly collect personal information from
									children under 18.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									11. Changes to This Privacy Policy
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									We may update this Privacy Policy from time to time. Changes
									will be posted on this page with an updated effective date. We
									encourage you to review this policy periodically.
								</p>
							</section>

							<section className="mb-8">
								<h2 className="text-2xl font-bold text-white mb-4">
									12. Contact Information
								</h2>
								<p className="text-white-200 leading-relaxed mb-4">
									If you have questions about this Privacy Policy or my data
									practices, please contact us:
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
									<p className="text-white-200 mt-2">
										<strong className="text-white">Data Protection:</strong> For
										data protection inquiries, please use the subject line
										&quot;Privacy Policy Inquiry&quot;
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
