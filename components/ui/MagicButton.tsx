const MagicButton = ({
	as = "button",
	type = "button",
	title,
	icon,
	position,
	handleClick,
	otherClasses,
	disabled = false,
	ariaBusy = false,
}: {
	as?: "button" | "span";
	type?: "button" | "submit" | "reset";
	title: string;
	icon: React.ReactNode;
	position: string;
	handleClick?: () => void;
	otherClasses?: string;
	disabled?: boolean;
	ariaBusy?: boolean;
}) => {
	const Component = as;

	return (
		<Component
			disabled={as === "button" ? disabled : undefined}
			type={as === "button" ? type : undefined}
			aria-busy={as === "button" ? ariaBusy : undefined}
			className="system-button relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 disabled:cursor-not-allowed disabled:opacity-60 md:mt-10 md:w-60"
			onClick={as === "button" ? handleClick : undefined}
		>
			<span
				aria-hidden="true"
				className="system-button__edge absolute inset-0 bg-[linear-gradient(120deg,#E2CBFF,#393BB2_50%,#E2CBFF)]"
			/>
			<span aria-hidden="true" className="system-button__scan" />
			<span
				className={`system-button__core relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl motion-reduce:transition-none [&_svg]:motion-reduce:animate-none ${otherClasses ?? ""}`}
			>
				{position === "left" && (
					<span aria-hidden="true" className="system-button__icon">
						{icon}
					</span>
				)}
				{title}
				{position === "right" && (
					<span aria-hidden="true" className="system-button__icon">
						{icon}
					</span>
				)}
			</span>
		</Component>
	);
};

export default MagicButton;
