import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Grid = () => {
	return (
		<section id="about">
			<BentoGrid className="w-full py-20">
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						img,
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
