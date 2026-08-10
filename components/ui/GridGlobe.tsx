const globeNodes = [
	"left-[28%] top-[30%]",
	"left-[61%] top-[22%]",
	"left-[72%] top-[54%]",
	"left-[43%] top-[65%]",
	"left-[22%] top-[58%]",
];

const GridGlobe = () => (
	<div
		aria-hidden="true"
		className="pointer-events-none absolute -left-5 top-36 flex h-full w-full items-center justify-center md:top-40"
	>
		<div className="relative mx-auto h-96 w-full max-w-7xl overflow-hidden px-4">
			<div className="absolute inset-x-0 bottom-0 z-40 h-40 bg-gradient-to-b from-transparent to-black" />
			<div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 overflow-hidden rounded-full border border-cyan-300/40 bg-[radial-gradient(circle_at_35%_28%,rgba(103,232,249,0.45),rgba(6,32,86,0.95)_42%,#030014_72%)] shadow-[0_0_70px_rgba(59,130,246,0.28)]">
				<div className="absolute inset-[8%] rounded-[50%] border border-cyan-200/25" />
				<div className="absolute inset-y-[4%] left-1/2 w-[42%] -translate-x-1/2 rounded-[50%] border-x border-cyan-200/30" />
				<div className="absolute inset-y-[4%] left-1/2 w-[72%] -translate-x-1/2 rounded-[50%] border-x border-cyan-200/20" />
				<div className="absolute left-[6%] right-[6%] top-1/2 h-[34%] -translate-y-1/2 rounded-[50%] border-y border-cyan-200/30" />
				<div className="absolute left-[6%] right-[6%] top-1/2 h-[68%] -translate-y-1/2 rounded-[50%] border-y border-cyan-200/20" />
				<div className="absolute left-[22%] top-[31%] h-px w-[50%] rotate-[22deg] bg-gradient-to-r from-cyan-300/20 via-cyan-200/80 to-indigo-300/20" />
				<div className="absolute left-[25%] top-[57%] h-px w-[48%] -rotate-[18deg] bg-gradient-to-r from-indigo-300/20 via-purple/80 to-cyan-300/20" />
				{globeNodes.map((position) => (
					<span
						key={position}
						className={`absolute h-2 w-2 rounded-full border border-white/70 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)] ${position}`}
					/>
				))}
			</div>
		</div>
	</div>
);

export default GridGlobe;
