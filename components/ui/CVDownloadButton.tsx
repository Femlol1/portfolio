import { FaDownload } from "react-icons/fa6";
import MagicButton from "./MagicButton";

interface CVDownloadButtonProps {
	className?: string;
	showText?: boolean;
	size?: "sm" | "md" | "lg";
}

const CVDownloadButton = ({
	className = "",
	showText = true,
	size = "md",
}: CVDownloadButtonProps) => {
	if (size === "sm" && !showText) {
		return (
			<a
				href="/Osifemi-Osibemekun-CV.pdf"
				download
				className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 text-white transition-colors duration-300 hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple ${className}`}
				aria-label="Download CV"
			>
				<FaDownload aria-hidden="true" className="h-4 w-4" />
			</a>
		);
	}

	return (
		<a
			href="/Osifemi-Osibemekun-CV.pdf"
			download
			className={className}
			aria-label="Download CV as a PDF"
		>
			<MagicButton
				as="span"
				title={showText ? "Download CV" : ""}
				icon={<FaDownload />}
				position="right"
				otherClasses="transition-colors duration-300 hover:bg-slate-900"
			/>
		</a>
	);
};

export default CVDownloadButton;
