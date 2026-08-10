import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Grid = () => {
	return (
		<section id="about" aria-labelledby="about-heading">
			<h2 id="about-heading" className="sr-only">
				About me
			</h2>
			<BentoGrid className="w-full py-20">
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						img,
						imgalt,
						imgClassName,
						titleClassName,
						spareImg,
						width,
						height,
					}) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							img={img}
							imgalt={imgalt}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
							width={width}
							height={height}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};

export default Grid;
