"use client";

import { FaDownload } from "react-icons/fa6";
import MagicButton from "./MagicButton";

interface CVDownloadProps {
	title?: string;
	className?: string;
	showIcon?: boolean;
	variant?: "button" | "link";
}

const CVDownload: React.FC<CVDownloadProps> = ({
	title = "Download CV",
	className = "",
	showIcon = true,
	variant = "button",
}) => {
	const handleDownload = () => {
		// You can add analytics tracking here if needed
		console.log("CV download initiated");
	};

	if (variant === "link") {
		return (
			<a
				href="/Osibemekun_Femi_SoftwareEngineer.pdf"
				download="Osibemekun_Femi_CV.pdf"
				target="_blank"
				rel="noopener noreferrer"
				onClick={handleDownload}
				className={`inline-flex items-center gap-2 text-purple hover:text-purple/80 transition-colors duration-200 ${className}`}
				aria-label="Download my CV"
			>
				{title}
				{showIcon && <FaDownload className="w-4 h-4" />}
			</a>
		);
	}

	return (
		<a
			href="/Osibemekun_Femi_SoftwareEngineer.pdf"
			download="Osibemekun_Femi_CV.pdf"
			target="_blank"
			rel="noopener noreferrer"
			onClick={handleDownload}
			aria-label="Download my CV"
			className={className}
		>
			<MagicButton
				title={title}
				icon={showIcon ? <FaDownload /> : undefined}
				position="right"
			/>
		</a>
	);
};

export default CVDownload;
