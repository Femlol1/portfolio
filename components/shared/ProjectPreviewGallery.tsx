"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectPreview = {
	src: string;
	alt: string;
	label: string;
	href?: string;
};

type PreviewStatus = {
	label: string;
	dateTime?: string;
};

type ProjectPreviewGalleryProps = {
	title: string;
	siteLabel: string;
	previews: ProjectPreview[];
	status: PreviewStatus;
	priority?: boolean;
};

export default function ProjectPreviewGallery({
	title,
	siteLabel,
	previews,
	status,
	priority = false,
}: ProjectPreviewGalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const activePreview = previews[activeIndex] ?? previews[0];

	if (!activePreview) return null;
	const announcement = `${title}: showing ${activePreview.label}`;

	return (
		<figure className="overflow-hidden rounded-xl border border-white/15 bg-[#070a1a] shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
			<div className="flex min-h-11 items-center gap-2 border-b border-white/10 bg-[#0d1228] px-3 sm:px-4">
				<div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
					<span className="h-2 w-2 rounded-full bg-[#ff6b81]/80" />
					<span className="h-2 w-2 rounded-full bg-[#ffd166]/80" />
					<span className="h-2 w-2 rounded-full bg-[#7de5f5]/80" />
				</div>
				<div className="ml-1 flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1.5">
					<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" aria-hidden="true" />
					<span className="truncate font-mono text-[10px] uppercase tracking-[0.11em] text-white-200 sm:text-[11px]">
						{siteLabel}
					</span>
				</div>
				{activePreview.href && (
					<Link
						href={activePreview.href}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex min-h-9 shrink-0 items-center gap-1 rounded-md px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-purple transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple motion-reduce:transition-none sm:text-[11px]"
						aria-label={`Open the ${activePreview.label} page for ${title} in a new tab`}
					>
						Open <span aria-hidden="true">&#8599;</span>
					</Link>
				)}
			</div>

			<div className="relative aspect-[16/10] overflow-hidden bg-black-100">
				<Image
					key={activePreview.src}
					src={activePreview.src}
					alt={activePreview.alt}
					fill
					priority={priority}
					sizes="(max-width: 640px) calc(100vw - 4rem), (max-width: 1024px) 44vw, 36rem"
					className="object-cover object-top"
				/>
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/45 to-transparent"
					aria-hidden="true"
				/>
				<div className="absolute bottom-2 left-2 rounded-md border border-white/15 bg-black/75 px-2.5 py-1 backdrop-blur-sm">
					{status.dateTime ? (
						<time
							dateTime={status.dateTime}
							className="font-mono text-[10px] font-semibold uppercase tracking-[0.11em] text-white sm:text-[11px]"
						>
							{status.label}
						</time>
					) : (
						<span className="font-mono text-[10px] font-semibold uppercase tracking-[0.11em] text-white sm:text-[11px]">
							{status.label}
						</span>
					)}
				</div>
			</div>

			{previews.length > 1 && (
				<div
					className="grid border-t border-white/10 bg-[#0a0e20]"
					style={{ gridTemplateColumns: `repeat(${previews.length}, minmax(0, 1fr))` }}
					role="group"
					aria-label={`Website pages shown for ${title}`}
				>
					{previews.map((preview, index) => {
						const isActive = index === activeIndex;

						return (
							<button
							key={`${preview.src}-${preview.label}`}
							type="button"
							onClick={() => setActiveIndex(index)}
							aria-pressed={isActive}
							className={`relative min-h-11 truncate border-r border-white/[0.08] px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors last:border-r-0 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple motion-reduce:transition-none sm:text-[11px] ${
								isActive
									? "bg-purple/[0.12] text-purple"
									: "text-white-200 hover:bg-white/[0.04] hover:text-white"
							}`}
						>
							{preview.label}
							{isActive && (
								<span
									className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-cyan-200 to-purple"
									aria-hidden="true"
								/>
							)}
							</button>
						);
					})}
				</div>
			)}
			<figcaption className="sr-only" aria-live="polite">
				{announcement}
			</figcaption>
		</figure>
	);
}
