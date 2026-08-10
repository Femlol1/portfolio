const phases = [
	{
		phase: "Phase 1",
		title: "Planning & Strategy",
		description:
			"We map out your goals, audience, site structure, content, and core functionality so the project starts with clear priorities.",
		accent:
			"bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_58%)]",
	},
	{
		phase: "Phase 2",
		title: "Development & Progress Updates",
		description:
			"I turn the agreed direction into working software and share regular progress updates, so decisions stay visible throughout the build.",
		accent:
			"bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.2),transparent_58%)]",
	},
	{
		phase: "Phase 3",
		title: "Testing & Launch",
		description:
			"I test the experience across devices, resolve launch issues, and deploy the finished site with a practical handover.",
		accent:
			"bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.22),transparent_58%)]",
	},
];

const Approach = () => {
	return (
		<section aria-labelledby="approach-heading" className="w-full py-20">
			<h2 className="heading system-reveal" id="approach-heading">
				My <span className="text-purple">approach</span>
			</h2>
			<div className="my-16 grid gap-5 lg:grid-cols-3">
				{phases.map((item) => (
					<article
						key={item.phase}
						className="system-surface system-surface--lift relative min-h-80 overflow-hidden rounded-3xl border border-white/20 bg-black-200 p-8"
					>
						<div
							aria-hidden="true"
							className={`pointer-events-none absolute inset-0 ${item.accent}`}
						/>
						<CornerIcon className="-left-3 -top-3" />
						<CornerIcon className="-right-3 -top-3" />
						<CornerIcon className="-bottom-3 -left-3" />
						<CornerIcon className="-bottom-3 -right-3" />

						<div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center">
							<span className="inline-flex min-h-11 items-center rounded-full border border-slate-700 bg-slate-950/80 px-5 py-2 text-lg font-bold text-slate-200">
								{item.phase}
							</span>
							<h3 className="text-2xl font-bold text-white md:text-3xl">
								{item.title}
							</h3>
							<p className="max-w-sm text-base leading-relaxed text-blue-100">
								{item.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

const CornerIcon = ({ className }: { className: string }) => (
	<svg
		aria-hidden="true"
		focusable="false"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		className={`absolute h-6 w-6 text-white ${className}`}
	>
		<path strokeLinecap="round" d="M12 6v12m6-6H6" />
	</svg>
);

export default Approach;
