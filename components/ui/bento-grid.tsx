"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { DEFAULT_BLUR_DATA_URL } from "@/lib/imageUtils";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/data";

import Image from "next/image";
import CollaborationProtocol from "./CollaborationProtocol";
import GridGlobe from "./GridGlobe";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				// change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgalt,
	imgClassName,
	titleClassName,
	spareImg,
	width,
	height,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgalt: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
	width: number;
	height: number;
}) => {
	const leftLists = ["React", "Express", "TypeScript"];
	const rightLists = ["Django", "MongoDB", "Firebase"];

	const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
		"idle"
	);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(CONTACT_EMAIL);
			setCopyStatus("copied");
		} catch {
			setCopyStatus("error");
		}
	};

	return (
		<article
			aria-labelledby={`about-card-${id}-title`}
			className={cn(
				"system-surface system-surface--lift row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 motion-reduce:transition-none",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				{id === 1 && <CollaborationProtocol />}
				<div className="w-full h-full absolute">
					{img && (
						<Image
							src={img}
							alt={imgalt}
							width={width}
							height={height}
							className={cn(imgClassName, "object-cover object-center")}
							placeholder="blur"
							blurDataURL={DEFAULT_BLUR_DATA_URL}
							onError={(e) => {
								console.error("Failed to load image:", img);
								// Hide the image container if it fails to load
								const target = e.target as HTMLImageElement;
								target.style.display = "none";
							}}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					} `}
				>
					{spareImg && (
						<Image
							src={spareImg}
							alt=""
							width={width}
							height={height}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>
				{id === 6 && (
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(18,113,255,0.45),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(203,172,249,0.4),transparent_45%),linear-gradient(135deg,#6c00a2,#001152)]"
					/>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 motion-reduce:transform-none motion-reduce:transition-none",
						id === 1 && "h-full"
					)}
				>
					{/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
					</div>
					{/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
					{/* remove mb-2 mt-2 */}
					<h3
						id={`about-card-${id}-title`}
						className={cn(
							"z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl",
							id === 1 && "md:text-2xl"
						)}
					>
						{title}
					</h3>

					{/* for the github 3d globe */}
					{id === 2 && <GridGlobe />}

					{/* Tech stack list div */}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							{/* tech stack lists */}
							<div className="flex flex-col gap-3">
								{leftLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
								<span className=" py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
							</div>
							<div className="flex flex-col gap-3">
								<span className="py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
								{rightLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<MagicButton
								title={
									copyStatus === "copied"
										? "Email copied!"
										: copyStatus === "error"
											? "Copy failed — try again"
											: "Copy my email address"
								}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161A31]"
							/>
							<p className="sr-only" aria-live="polite">
								{copyStatus === "copied"
									? "Email address copied to the clipboard."
									: copyStatus === "error"
										? "Unable to copy the email address."
										: ""}
							</p>
						</div>
					)}
				</div>
			</div>
		</article>
	);
};
