"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavItem = {
	name: string;
	link: string;
	icon?: ReactNode;
	external?: boolean;
};

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: NavItem[];
	className?: string;
}) => {
	const pathname = usePathname();
	const linkClassName =
		"system-nav-link relative flex min-h-11 shrink-0 items-center gap-1 rounded-md px-1 text-xs text-neutral-100 transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black-100 motion-reduce:transition-none sm:px-2 sm:text-sm";

	return (
		<nav
			aria-label="Primary navigation"
			className={cn(
				"system-nav fixed inset-x-0 top-4 z-[5000] mx-auto flex w-[calc(100%-2rem)] max-w-fit items-center gap-1 overflow-x-auto rounded-full border border-white/20 bg-black-100/95 px-2 py-2 shadow-lg backdrop-blur-md sm:top-8 sm:gap-3 sm:px-7",
				className
			)}
		>
			{navItems.map((navItem) => {
				const isHashLink = navItem.link.includes("#");
				const navPath = navItem.link.split("#")[0] || "/";
				const isCurrentPage =
					!isHashLink && navPath === "/"
						? pathname === "/"
						: !isHashLink &&
							(pathname === navPath || pathname.startsWith(`${navPath}/`));

				const content = (
					<>
						{navItem.icon ? (
							<span aria-hidden="true" className="block sm:hidden">
								{navItem.icon}
							</span>
						) : null}
						<span className="whitespace-nowrap">{navItem.name}</span>
					</>
				);

				if (navItem.external) {
					return (
						<a
							key={navItem.link}
							href={navItem.link}
							target="_blank"
							rel="noopener noreferrer"
							className={linkClassName}
						>
							{content}
							<span className="sr-only"> (opens in a new tab)</span>
						</a>
					);
				}

				return (
					<Link
						key={navItem.link}
						href={navItem.link}
						aria-current={isCurrentPage ? "page" : undefined}
						className={cn(
							linkClassName,
							isCurrentPage &&
								"system-nav-link--active bg-white/10 text-purple"
						)}
					>
						{content}
					</Link>
				);
			})}
		</nav>
	);
};
