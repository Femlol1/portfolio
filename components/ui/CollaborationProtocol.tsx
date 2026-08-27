const collaborationStages = [
	{ label: "Brief", detail: "Align" },
	{ label: "Build", detail: "Progress" },
	{ label: "Review", detail: "Feedback" },
	{ label: "Launch", detail: "Handover" },
];

const CollaborationProtocol = () => (
	<div
		aria-hidden="true"
		className="pointer-events-none absolute inset-0 overflow-hidden bg-[#05081d]"
	>
		<div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
		<div className="absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-purple/10 blur-3xl" />
		<div className="absolute inset-0 bg-grid-white/[0.04] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
		<div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#05081d] via-[#05081d]/95 to-transparent" />

		<div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 sm:inset-x-7 sm:top-7 lg:inset-x-10 lg:top-10">
			<span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/[0.06] px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-100 sm:text-[10px]">
				<span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(125,229,245,0.8)]" />
				Channel open
			</span>
			<span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white-200/70 sm:text-[10px]">
				Client <span className="text-purple">&harr;</span> Femi
			</span>
		</div>

		<div className="absolute inset-x-5 top-[31%] sm:inset-x-8 lg:inset-x-12">
			<div className="relative">
				<span className="absolute left-[12.5%] right-[12.5%] top-3 h-px bg-white/15" />
				<span className="absolute left-[12.5%] right-[12.5%] top-3 h-px origin-left scale-x-[0.18] bg-gradient-to-r from-cyan-200 via-purple to-cyan-200 transition-transform duration-700 ease-out group-hover/bento:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none" />

				<div className="relative grid grid-cols-4">
					{collaborationStages.map((stage, index) => (
						<div key={stage.label} className="flex flex-col items-center text-center">
							<span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#090d24] transition-colors duration-500 group-hover/bento:border-cyan-200/60 motion-reduce:transition-none">
								<span
									className={`h-1.5 w-1.5 rounded-full ${
										index % 2 === 0 ? "bg-cyan-200" : "bg-purple"
									}`}
								/>
							</span>
							<span className="mt-3 font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-white sm:text-[10px]">
								{stage.label}
							</span>
							<span className="mt-1 hidden text-[9px] text-white-200/65 sm:block">
								{stage.detail}
							</span>
						</div>
					))}
				</div>

				<div className="absolute left-[12.5%] right-[12.5%] top-8 h-12 rounded-b-2xl border-x border-b border-dashed border-purple/20 sm:h-14" />
				<span className="absolute left-1/2 top-[4.4rem] -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#090d24]/90 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white-200/70 sm:top-20 sm:text-[9px]">
					Feedback stays open
				</span>
			</div>
		</div>
	</div>
);

export default CollaborationProtocol;
