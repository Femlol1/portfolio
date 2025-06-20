"use client";

import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

interface InternalLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	external?: boolean;
	showArrow?: boolean;
}

const InternalLink = ({
	href,
	children,
	className = "",
	external = false,
	showArrow = false,
}: InternalLinkProps) => {
	const baseClasses =
		"text-purple hover:text-purple-light transition-colors duration-200";
	const combinedClasses = `${baseClasses} ${className}`;

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={combinedClasses}
				aria-label={`${children} (opens in new tab)`}
			>
				{children}
				{showArrow && <FaExternalLinkAlt className="inline ml-1 w-3 h-3" />}
			</a>
		);
	}

	return (
		<Link href={href} className={combinedClasses}>
			{children}
			{showArrow && <FaArrowRight className="inline ml-1 w-3 h-3" />}
		</Link>
	);
};

// Related content component for better internal linking
interface RelatedContentProps {
	title: string;
	links: Array<{
		href: string;
		title: string;
		description: string;
		external?: boolean;
	}>;
}

export const RelatedContent = ({ title, links }: RelatedContentProps) => {
	return (
		<section className="mt-12 p-6 bg-black-200 border border-white/[0.1] rounded-lg">
			<h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
			<div className="space-y-3">
				{links.map((link, index) => (
					<div key={index} className="border-l-2 border-purple pl-4">
						<InternalLink
							href={link.href}
							external={link.external}
							className="font-medium block hover:underline"
							showArrow={true}
						>
							{link.title}
						</InternalLink>
						<p className="text-white-200 text-sm mt-1">{link.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default InternalLink;
