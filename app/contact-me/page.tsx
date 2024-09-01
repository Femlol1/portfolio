const page = () => {
	return (
		<div
			style={{ backgroundImage: "url(bg.png)" }}
			className=" w-screen h-screen bg-center flex items-center justify-center"
		>
			<div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white">
				<div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]"></div>
			</div>
		</div>
	);
};

export default page;
