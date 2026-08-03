"use client";

import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

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
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			const previous = scrollYProgress.getPrevious() ?? current;
			const direction = current - previous;

			if (scrollYProgress.get() < 0.05) {
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.nav
				aria-label="Primary navigation"
				initial={false}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"fixed top-4 sm:top-10 inset-x-0 z-[5000] mx-auto flex w-[calc(100%-2rem)] max-w-fit items-center justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto rounded-full border border-white/[0.2] bg-black-100/95 px-5 sm:px-10 py-3 sm:py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md",
					className
				)}
			>
				{navItems.map((navItem) => {
					if (navItem.external) {
						return (
							<a
								key={navItem.link}
								href={navItem.link}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
								)}
							>
								<span className="block sm:hidden">{navItem.icon}</span>
								<span className="text-sm !cursor-pointer">{navItem.name}</span>
							</a>
						);
					}

					return (
						<Link
							key={navItem.link}
							href={navItem.link}
							className={cn(
								"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
							)}
						>
							<span className="block sm:hidden">{navItem.icon}</span>
							<span className="text-sm !cursor-pointer">{navItem.name}</span>
						</Link>
					);
				})}
			</motion.nav>
		</AnimatePresence>
	);
};
