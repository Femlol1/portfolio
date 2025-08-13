"use client";

import React from "react";
import { FaDownload } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";

interface CVDownloadButtonProps {
	className?: string;
	showText?: boolean;
	size?: "sm" | "md" | "lg";
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
	className = "",
	showText = true,
	size = "md",
}) => {
	const handleDownload = () => {
		// Create a temporary link element
		const link = document.createElement("a");
		link.href = "/Osifemi-Osibemekun-CV.pdf";
		link.download = "Osifemi-Osibemekun-CV.pdf";
		link.target = "_blank";

		// Append to body, click, and remove
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (size === "sm" && !showText) {
		return (
			<button
				onClick={handleDownload}
				className={`inline-flex items-center justify-center p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 ${className}`}
				title="Download CV"
			>
				<FaDownload className="w-4 h-4" />
			</button>
		);
	}

	return (
		<div className={className}>
			<MagicButton
				title={showText ? "Download CV" : ""}
				icon={<FaDownload />}
				position="right"
				handleClick={handleDownload}
				otherClasses="hover:scale-105 transition-transform duration-300"
			/>
		</div>
	);
};

export default CVDownloadButton;
