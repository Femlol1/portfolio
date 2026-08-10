import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const wordsArray = words.split(" ");
	return (
		<span className={cn("font-bold", className)}>
			{wordsArray.map((word, idx) => (
				<span
					key={`${word}-${idx}`}
					className={idx > 3 ? "text-purple" : "text-black dark:text-white"}
				>
					{word}
					{idx < wordsArray.length - 1 ? " " : null}
				</span>
			))}
		</span>
	);
};
