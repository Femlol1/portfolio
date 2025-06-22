"use client";

import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
	const handleGoBack = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};

	return (
		<button
			onClick={handleGoBack}
			className="flex items-center gap-2 text-white-200 hover:text-purple transition-colors duration-200 mx-auto text-sm"
		>
			<FaArrowLeft className="w-3 h-3" />
			Go Back
		</button>
	);
}
