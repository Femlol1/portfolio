import {
	formatServiceProductPrice,
	serviceProducts,
	type ServiceProduct,
} from "@/data";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

type PricingSectionProps = {
	preview?: boolean;
};

const accentStyles = {
	violet: {
		label: "text-purple",
		marker: "bg-purple shadow-[0_0_12px_rgba(203,172,249,0.55)]",
		border: "border-purple/35",
	},
	cyan: {
		label: "text-cyan-200",
		marker: "bg-cyan-200 shadow-[0_0_12px_rgba(125,229,245,0.55)]",
		border: "border-cyan-200/35",
	},
} as const;

const PricingSection = ({ preview = false }: PricingSectionProps) => {
	const displayedProducts = preview
		? serviceProducts.filter((product) => product.featured)
		: serviceProducts;

	return (
		<section aria-labelledby="products-heading" className="py-20" id="products">
			<div className="system-reveal mx-auto mb-12 max-w-3xl text-center">
				<p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
					Fixed-scope build menu
				</p>
				<h2
					id="products-heading"
					className="text-3xl font-bold text-white md:text-4xl"
				>
					Products with <span className="text-purple">clear prices</span>
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-white-100">
					Choose a practical starting point, then shape the final scope around your
					goals. Every public website product includes search-ready foundations.
				</p>
			</div>

			<div className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
				{[
					"Responsive QA",
					"Accessibility foundations",
					"Search-ready setup",
					"Clear handover",
				].map((item) => (
					<div
						key={item}
						className="flex min-h-16 items-center justify-center bg-black-100 px-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white-200"
					>
						{item}
					</div>
				))}
			</div>

			<div
				className={`grid grid-cols-1 gap-6 ${
					preview ? "lg:grid-cols-3" : "lg:grid-cols-2"
				}`}
			>
				{displayedProducts.map((product) => (
					<ProductCard key={product.slug} product={product} preview={preview} />
				))}
			</div>

			{preview ? (
				<div className="mt-12 text-center">
					<Link
						href="/services#products"
						className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-purple px-8 py-3 font-semibold text-black-100 transition-colors hover:bg-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
					>
						View all products and prices
						<FaArrowRight aria-hidden="true" className="h-4 w-4" />
					</Link>
				</div>
			) : (
				<div className="mt-10 rounded-xl border border-white/10 bg-black-200 px-5 py-4 text-sm leading-relaxed text-white-200">
					<p>
						Prices are starting points in GBP. Your final quote is confirmed after a
						short discovery call and depends on scope, content, and integrations.
						Domain, hosting, paid tools, third-party usage fees, and VAT where
						applicable are not included unless stated.
					</p>
				</div>
			)}
		</section>
	);
};

const ProductCard = ({
	product,
	preview,
}: {
	product: ServiceProduct;
	preview: boolean;
}) => {
	const accent = accentStyles[product.accent];
	const isSpotlight = product.spotlight && !preview;

	return (
		<article
			id={product.slug}
			aria-labelledby={`${product.slug}-title`}
			className={`system-surface system-surface--lift scroll-mt-24 overflow-hidden rounded-2xl border bg-black-200 p-6 md:p-8 ${
				accent.border
			} ${isSpotlight ? "lg:col-span-2" : ""}`}
		>
			<header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
				<div className="max-w-xl">
					<div className="mb-3 flex items-center gap-3">
						<span aria-hidden="true" className={`h-2 w-2 rounded-full ${accent.marker}`} />
						<p
							className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] ${accent.label}`}
						>
							{product.category}
						</p>
						{product.spotlight ? (
							<span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-100">
								Dedicated SEO product
							</span>
						) : null}
					</div>
					<h3
						id={`${product.slug}-title`}
						className="text-2xl font-bold text-white md:text-3xl"
					>
						{product.title}
					</h3>
					<p className="mt-3 leading-relaxed text-white-100">
						{product.shortDescription}
					</p>
				</div>

				<div className="shrink-0 sm:text-right">
					<p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white-200">
						{product.price.qualifier === "from" ? "Starting from" : "Fixed price"}
					</p>
					<p className="mt-1 text-3xl font-bold text-white">
						{formatServiceProductPrice(product)}
					</p>
					<p className="text-xs text-white-200">
						per {product.price.unit}
					</p>
				</div>
			</header>

			<div className={`mt-6 ${isSpotlight ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
				<div>
					<h4 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white">
						Included scope
					</h4>
					<ul className="mt-4 space-y-3">
						{product.features.map((feature) => (
							<li key={feature} className="flex items-start gap-3 text-sm text-white-100">
								<FaCheck
									aria-hidden="true"
									className={`mt-1 h-3 w-3 shrink-0 ${accent.label}`}
								/>
								<span>{feature}</span>
							</li>
						))}
					</ul>
				</div>

				<div className={isSpotlight ? "mt-6 flex flex-col lg:mt-0" : ""}>
					<div
						className={`border-l-2 border-cyan-200/50 bg-cyan-200/[0.04] px-4 py-3 ${
							isSpotlight ? "mt-6 lg:mt-0" : "mt-6"
						}`}
					>
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
							SEO coverage
						</p>
						<p className="mt-2 text-sm leading-relaxed text-white-200">
							{product.seoCoverage}
						</p>
					</div>

					<footer className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-auto">
						<p className="font-mono text-xs uppercase tracking-[0.12em] text-white-200">
							Typical delivery: <span className="text-white">{product.delivery}</span>
						</p>
						<Link
							href={`/contact-me?interest=${product.slug}#contact`}
							className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-purple/50 px-4 py-2 text-sm font-semibold text-purple transition-colors hover:border-purple hover:bg-purple hover:text-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none sm:self-auto"
						>
							Choose this product
							<FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
						</Link>
					</footer>
				</div>
			</div>
		</article>
	);
};

export default PricingSection;
