import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="w-full pb-10 mb-[100px] md:mb-5" id="footer">
			<div className="flex flex-col items-center"></div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright{" "}
					<FaRegCopyright className="inline text-center justify-center items-center" />{" "}
					2024 Osifemi Osibemekun
				</p>
				<div className="flex items-center md:gap-3 gap-6 py-6">
					{socialMedia.map((profile) => (
						<div
							key={profile.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<Link href={profile.link}>
								<Image
									src={profile.img}
									alt={profile.alt}
									width={20}
									height={20}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
