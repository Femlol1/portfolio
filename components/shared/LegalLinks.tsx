import Link from "next/link";

interface LegalLinksProps {
	className?: string;
	textColor?: string;
}

const LegalLinks = ({
	className = "flex flex-wrap gap-4 justify-center text-sm",
	textColor = "text-white-200",
}: LegalLinksProps) => {
	return (
		<div className={className}>
			<Link
				href="/terms"
				className={`${textColor} hover:text-purple transition-colors duration-200`}
			>
				Terms of Service
			</Link>
			<span className={textColor}>•</span>
			<Link
				href="/privacy"
				className={`${textColor} hover:text-purple transition-colors duration-200`}
			>
				Privacy Policy
			</Link>
		</div>
	);
};

export default LegalLinks;
