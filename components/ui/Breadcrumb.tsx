"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface BreadcrumbItem {
	label: string;
	href: string;
}

const Breadcrumb = () => {
	const pathname = usePathname();

	const generateBreadcrumbs = (): BreadcrumbItem[] => {
		const paths = pathname.split("/").filter(Boolean);

		const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

		// Generate breadcrumbs based on current path
		let currentPath = "";
		paths.forEach((path) => {
			currentPath += `/${path}`;

			// Convert path to readable label
			const label = path
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");

			breadcrumbs.push({
				label,
				href: currentPath,
			});
		});

		return breadcrumbs;
	};

	const breadcrumbs = generateBreadcrumbs();

	// Don't show breadcrumbs on home page
	if (pathname === "/") return null;

	return (
		<nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8">
			<ol className="flex items-center space-x-2 text-sm">
				{breadcrumbs.map((item, index) => (
					<li key={item.href} className="flex items-center">
						{index === 0 && <FaHome className="w-4 h-4 mr-1 text-purple" />}

						{index < breadcrumbs.length - 1 ? (
							<Link
								href={item.href}
								className="text-white-200 hover:text-purple transition-colors duration-200"
							>
								{item.label}
							</Link>
						) : (
							<span className="text-white font-medium">{item.label}</span>
						)}

						{index < breadcrumbs.length - 1 && (
							<FaChevronRight className="w-3 h-3 mx-2 text-white-200" />
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
