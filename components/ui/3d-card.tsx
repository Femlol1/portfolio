"use client";

import { cn } from "@/lib/utils";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

const MouseEnterContext = createContext<
	[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
	children,
	className,
	containerClassName,
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const boundsRef = useRef<{
		left: number;
		top: number;
		width: number;
		height: number;
	} | null>(null);
	const animationFrameRef = useRef<number | null>(null);
	const pendingTransformRef = useRef<string | null>(null);
	const [isMouseEntered, setIsMouseEntered] = useState(false);
	const prefersReducedMotion = () =>
		typeof window !== "undefined" &&
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	useEffect(() => {
		return () => {
			if (animationFrameRef.current !== null) {
				window.cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current || !boundsRef.current || prefersReducedMotion()) {
			return;
		}

		const { left, top, width, height } = boundsRef.current;
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		pendingTransformRef.current = `rotateY(${x}deg) rotateX(${y}deg)`;

		if (animationFrameRef.current !== null) return;

		animationFrameRef.current = window.requestAnimationFrame(() => {
			animationFrameRef.current = null;
			if (!containerRef.current || !pendingTransformRef.current) return;

			containerRef.current.style.transform = pendingTransformRef.current;
		});
	};

	const handleMouseEnter = () => {
		if (prefersReducedMotion()) return;
		if (!containerRef.current) return;

		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		boundsRef.current = { left, top, width, height };
		setIsMouseEntered(true);
	};

	const handleMouseLeave = () => {
		if (animationFrameRef.current !== null) {
			window.cancelAnimationFrame(animationFrameRef.current);
			animationFrameRef.current = null;
		}

		boundsRef.current = null;
		pendingTransformRef.current = null;
		setIsMouseEntered(false);

		if (containerRef.current) {
			containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
		}
	};
	return (
		<MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
			<div
				className={cn(
					"py-20 flex items-center justify-center",
					containerClassName
				)}
				style={{
					perspective: "1000px",
				}}
			>
				<div
					ref={containerRef}
					onMouseEnter={handleMouseEnter}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className={cn(
						"flex items-center justify-center relative transition-all duration-200 ease-linear",
						className
					)}
					style={{
						transformStyle: "preserve-3d",
					}}
				>
					{children}
				</div>
			</div>
		</MouseEnterContext.Provider>
	);
};

export const CardBody = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
				className
			)}
		>
			{children}
		</div>
	);
};

type CardItemOwnProps<T extends React.ElementType> = {
	as?: T;
	children: React.ReactNode;
	className?: string;
	translateX?: number | string;
	translateY?: number | string;
	translateZ?: number | string;
	rotateX?: number | string;
	rotateY?: number | string;
	rotateZ?: number | string;
};

type CardItemProps<T extends React.ElementType> = CardItemOwnProps<T> &
	Omit<React.ComponentPropsWithoutRef<T>, keyof CardItemOwnProps<T>>;

export const CardItem = <T extends React.ElementType = "div">({
	as,
	children,
	className,
	translateX = 0,
	translateY = 0,
	translateZ = 0,
	rotateX = 0,
	rotateY = 0,
	rotateZ = 0,
	...rest
}: CardItemProps<T>) => {
	const Tag = (as ?? "div") as React.ElementType<any>;
	const ref = useRef<HTMLDivElement>(null);
	const [isMouseEntered] = useMouseEnter();

	useEffect(() => {
		if (!ref.current) return;

		const transformValue = isMouseEntered
			? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
			: `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

		ref.current.style.transform = transformValue;
	}, [
		isMouseEntered,
		translateX,
		translateY,
		translateZ,
		rotateX,
		rotateY,
		rotateZ,
	]);

	// const handleAnimations = () => {
	// 	if (!ref.current) return;
	// 	if (isMouseEntered) {
	// 		ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
	// 	} else {
	// 		ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
	// 	}
	// };

	return React.createElement(
		Tag,
		{
			...rest,
			ref,
			className: cn("w-fit transition duration-200 ease-linear", className),
		},
		children
	);
};

// Create a hook to use the context
export const useMouseEnter = () => {
	const context = useContext(MouseEnterContext);
	if (context === undefined) {
		throw new Error("useMouseEnter must be used within a MouseEnterProvider");
	}
	return context;
};
