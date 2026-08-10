import { cn } from "@/lib/utils";
import React from "react";

type StaticBorderOwnProps<T extends React.ElementType> = {
	as?: T;
	borderRadius?: string;
	children: React.ReactNode;
	containerClassName?: string;
	borderClassName?: string;
	duration?: number;
	className?: string;
};

type StaticBorderProps<T extends React.ElementType> = StaticBorderOwnProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof StaticBorderOwnProps<T>>;

/**
 * A lightweight bordered surface. The previous version ran one animation-frame
 * loop per card; this keeps the same public API and visual hierarchy without
 * continuous main-thread work.
 */
export function Button<T extends React.ElementType = "div">({
	borderRadius = "1.75rem",
	children,
	as,
	containerClassName,
	borderClassName,
	duration = 0,
	className,
	style,
	...otherProps
}: StaticBorderProps<T>) {
	const Component = (as ?? "div") as React.ElementType<any>;

	return React.createElement(
		Component,
		{
			...otherProps,
			className: cn(
				"system-surface relative overflow-hidden bg-gradient-to-br from-sky-400/70 via-purple/35 to-slate-800 p-px text-xl md:col-span-2",
				borderClassName,
				containerClassName
			),
			style: {
				...style,
				borderRadius,
				"--legacy-border-duration": `${duration}ms`,
			} as React.CSSProperties,
		},
		<div
			className={cn(
				"relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/95 text-sm text-white antialiased",
				className
			)}
			style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
		>
			{children}
		</div>
	);
}
