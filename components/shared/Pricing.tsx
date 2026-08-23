import {
	formatServiceProductPrice,
	serviceProducts,
	type ServiceProduct,
} from "@/data";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaPlus } from "react-icons/fa6";

type PricingSectionProps = {
	preview?: boolean;
};

const accentStyles = {
	violet: {
		label: "text-purple",
		marker: "bg-purple shadow-[0_0_12px_rgba(203,172,249,0.55)]",
		border: "border-purple/35",
		soft: "bg-purple/[0.05]",
	},
	cyan: {
		label: "text-cyan-200",
		marker: "bg-cyan-200 shadow-[0_0_12px_rgba(125,229,245,0.55)]",
		border: "border-cyan-200/35",
		soft: "bg-cyan-200/[0.05]",
	},
} as const;

const catalogueGroups: Array<{
	id: ServiceProduct["group"];
	eyebrow: string;
	title: string;
	description: string;
	gridClassName: string;
}> = [
	{
		id: "build",
		eyebrow: "Build & launch",
		title: "Turn an idea into a working product",
		description:
			"Customer-facing websites and applications designed to start taking enquiries, bookings, registrations, or sales.",
		gridClassName: "xl:grid-cols-3",
	},
	{
		id: "improve",
		eyebrow: "Improve & protect",
		title: "Strengthen what already exists",
		description:
			"Focused interventions for search visibility, accessibility, design quality, performance, and safer migrations.",
		gridClassName: "lg:grid-cols-2",
	},
	{
		id: "operate",
		eyebrow: "Automate & maintain",
		title: "Keep the work moving",
		description:
			"Connected systems and ongoing support that reduce repetitive work and keep digital operations healthy.",
		gridClassName: "xl:grid-cols-3",
	},
];

const PricingSection = ({ preview = false }: PricingSectionProps) => {
	const coreProducts = serviceProducts.filter(
		(product) => product.tier === "product"
	);
	const addOns = serviceProducts.filter((product) => product.tier === "add-on");
	const featuredProducts = coreProducts.filter((product) => product.featured);

	return (
		<section aria-labelledby="products-heading" className="py-20" id="products">
			<div className="system-reveal mx-auto mb-12 max-w-3xl text-center">
				<p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
					{preview ? "Featured starting points" : "Outcome-led product menu"}
				</p>
				<h2
					id="products-heading"
					className="text-3xl font-bold text-white md:text-4xl"
				>
					Products with <span className="text-purple">clear prices</span>
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-white-100">
					{preview
						? "Start with one of four useful entry points. Every public-facing build includes search-ready foundations."
						: `Compare ${coreProducts.length} clearly scoped products, then add specialist support only where your project needs it.`}
				</p>
			</div>

			{preview ? (
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
			) : null}

			{preview ? (
				<>
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{featuredProducts.map((product) => (
							<ProductCard key={product.slug} product={product} preview />
						))}
					</div>
					<p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-white-200">
						Prices are starting points in GBP. Final scope and cost are confirmed
						after discovery; hosting, paid tools, subscriptions, and third-party
						usage or transaction fees are separate unless stated.
					</p>
					<div className="mt-12 text-center">
						<Link
							href="/services#products"
							className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-purple px-8 py-3 font-semibold text-black-100 transition-colors hover:bg-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none"
						>
							View all products and prices
							<FaArrowRight aria-hidden="true" className="h-4 w-4" />
						</Link>
					</div>
				</>
			) : (
				<>
					<nav
						aria-label="Product categories"
						className="mb-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
					>
						{catalogueGroups.map((group) => {
							const count = coreProducts.filter(
								(product) => product.group === group.id
							).length;

							return (
								<Link
									key={group.id}
									href={`#${group.id}-products`}
									className="group flex min-h-20 items-center justify-between bg-black-100 px-5 py-4 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple motion-reduce:transition-none"
								>
									<span className="text-sm font-semibold text-white transition-colors group-hover:text-purple">
										{group.eyebrow}
									</span>
									<span className="font-mono text-xs text-cyan-200">
										{String(count).padStart(2, "0")}
									</span>
								</Link>
							);
						})}
						<Link
							href="#specialist-add-ons"
							className="group flex min-h-20 items-center justify-between bg-black-100 px-5 py-4 transition-colors hover:bg-black-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple motion-reduce:transition-none"
						>
							<span className="text-sm font-semibold text-white transition-colors group-hover:text-purple">
								Specialist add-ons
							</span>
							<span className="font-mono text-xs text-cyan-200">
								{String(addOns.length).padStart(2, "0")}
							</span>
						</Link>
					</nav>

					<div className="space-y-20">
						{catalogueGroups.map((group) => {
							const products = coreProducts.filter(
								(product) => product.group === group.id
							);

							return (
								<section
									key={group.id}
									aria-labelledby={`${group.id}-products-heading`}
									className="scroll-mt-24"
									id={`${group.id}-products`}
								>
									<header className="mb-8 grid gap-4 border-b border-white/10 pb-6 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] md:items-end">
										<div>
											<p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
												{group.eyebrow} / {String(products.length).padStart(2, "0")}
											</p>
											<h3
												id={`${group.id}-products-heading`}
												className="mt-3 text-2xl font-bold text-white md:text-3xl"
											>
												{group.title}
											</h3>
										</div>
										<p className="leading-relaxed text-white-200">
											{group.description}
										</p>
									</header>

									<div
										className={`grid grid-cols-1 gap-6 ${group.gridClassName}`}
									>
										{products.map((product) => (
											<ProductCard
												key={product.slug}
												product={product}
												preview={false}
											/>
										))}
									</div>
								</section>
							);
						})}

						<section
							aria-labelledby="specialist-add-ons-heading"
							className="scroll-mt-24"
							id="specialist-add-ons"
						>
							<header className="mb-8 max-w-3xl">
								<p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
									Specialist add-ons / {String(addOns.length).padStart(2, "0")}
								</p>
								<h3
									id="specialist-add-ons-heading"
									className="mt-3 text-2xl font-bold text-white md:text-3xl"
								>
									Add the technical layer your project needs
								</h3>
								<p className="mt-3 leading-relaxed text-white-200">
									Use these with a new package or strengthen a compatible existing
									website without commissioning a full rebuild.
								</p>
							</header>

							<div className="grid gap-6 lg:grid-cols-2">
								{addOns.map((product) => (
									<AddOnCard key={product.slug} product={product} />
								))}
							</div>
						</section>
					</div>

					<div className="mt-12 rounded-xl border border-white/10 bg-black-200 px-5 py-4 text-sm leading-relaxed text-white-200">
						<p>
							Prices are starting points in GBP. Your final quote is confirmed
							after a short discovery call and depends on scope, content, and
							integrations. Domain, hosting, paid tools, third-party usage fees,
							and VAT where applicable are not included unless stated.
						</p>
					</div>
				</>
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
	const visibleFeatures = preview ? product.features.slice(0, 3) : product.features;
	const ProductHeading = preview ? "h3" : "h4";

	return (
		<article
			id={product.slug}
			aria-labelledby={`${product.slug}-title`}
			className={`system-surface system-surface--lift flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border bg-black-200 p-6 md:p-8 ${accent.border}`}
		>
			<header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
				<div className="max-w-xl">
					<div className="mb-3 flex flex-wrap items-center gap-3">
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
					<ProductHeading
						id={`${product.slug}-title`}
						className="text-2xl font-bold text-white md:text-3xl"
					>
						{product.title}
					</ProductHeading>
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
					<p className="text-xs text-white-200">per {product.price.unit}</p>
				</div>
			</header>

			<div className="mt-6 flex flex-1 flex-col">
				<div>
					<p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white">
						{preview ? "Key inclusions" : "Included scope"}
					</p>
					<ul className="mt-4 space-y-3">
						{visibleFeatures.map((feature) => (
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

				<div className="mt-auto pt-6">
					<div className="border-l-2 border-cyan-200/50 bg-cyan-200/[0.04] px-4 py-3">
						<p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
							SEO coverage
						</p>
						<p className="mt-2 text-sm leading-relaxed text-white-200">
							{product.seoCoverage}
						</p>
					</div>

					{!preview && product.scopeNote ? (
						<p className="mt-4 text-xs leading-relaxed text-white-200">
							<span className="mr-2 font-mono font-semibold uppercase tracking-[0.12em] text-purple">
								Scope note
							</span>
							{product.scopeNote}
						</p>
					) : null}

					<footer className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
						<p className="font-mono text-xs uppercase tracking-[0.12em] text-white-200">
							Typical delivery: <span className="text-white">{product.delivery}</span>
						</p>
						<Link
							href={`/contact-me?interest=${product.slug}#contact`}
							aria-label={`Choose ${product.title}`}
							className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-purple/50 px-4 py-2 text-sm font-semibold text-purple transition-colors hover:border-purple hover:bg-purple hover:text-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none sm:w-auto"
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

const AddOnCard = ({ product }: { product: ServiceProduct }) => {
	const accent = accentStyles[product.accent];

	return (
		<article
			id={product.slug}
			aria-labelledby={`${product.slug}-title`}
			className={`system-surface scroll-mt-24 rounded-2xl border border-dashed p-6 md:p-8 ${accent.border} ${accent.soft}`}
		>
			<header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<div className="flex items-center gap-3">
						<span className={`flex h-7 w-7 items-center justify-center rounded-full border ${accent.border}`}>
							<FaPlus aria-hidden="true" className={`h-3 w-3 ${accent.label}`} />
						</span>
						<p className={`font-mono text-xs font-semibold uppercase tracking-[0.16em] ${accent.label}`}>
							Optional layer / {product.category}
						</p>
					</div>
					<h4 id={`${product.slug}-title`} className="mt-4 text-2xl font-bold text-white">
						{product.title}
					</h4>
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
					<p className="text-xs text-white-200">per {product.price.unit}</p>
				</div>
			</header>

			<ul className="mt-6 flex flex-wrap gap-2">
				{product.features.map((feature) => (
					<li
						key={feature}
						className="rounded-full border border-white/10 bg-black-100/70 px-3 py-2 text-xs leading-relaxed text-white-100"
					>
						{feature}
					</li>
				))}
			</ul>

			<div className="mt-6 border-t border-white/10 pt-5">
				<p className="text-sm leading-relaxed text-white-200">
					<span className="mr-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
						Search & performance
					</span>
					{product.seoCoverage}
				</p>
				{product.scopeNote ? (
					<p className="mt-3 text-xs leading-relaxed text-white-200">
						{product.scopeNote}
					</p>
				) : null}
			</div>

			<footer className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
				<p className="font-mono text-xs uppercase tracking-[0.12em] text-white-200">
					Delivery: <span className="text-white">{product.delivery}</span>
				</p>
				<Link
					href={`/contact-me?interest=${product.slug}#contact`}
					aria-label={`Discuss ${product.title}`}
					className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-purple/50 px-4 py-2 text-sm font-semibold text-purple transition-colors hover:border-purple hover:bg-purple hover:text-black-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none sm:w-auto"
				>
					Discuss this add-on
					<FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
				</Link>
			</footer>
		</article>
	);
};

export default PricingSection;
