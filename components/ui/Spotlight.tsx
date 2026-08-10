import { cn } from "@/lib/utils";

type SpotlightProps = {
	className?: string;
	fill?: string;
};

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => (
	<div
		aria-hidden="true"
		className={cn(
			"pointer-events-none absolute z-[1] h-[169%] w-[138%] -translate-x-1/2 -translate-y-[40%] scale-100 opacity-20 lg:w-[84%]",
			className
		)}
		style={{
			backgroundImage: `radial-gradient(ellipse at center, ${fill} 0%, transparent 67%)`,
		}}
	/>
);
