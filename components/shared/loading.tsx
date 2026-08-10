const Loading = () => (
	<span aria-hidden="true" className="ml-2 inline-flex items-center justify-center">
		<svg
			className="h-5 w-5 animate-spin text-white motion-reduce:animate-none"
			viewBox="0 0 24 24"
			fill="none"
			focusable="false"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			/>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8v8z"
			/>
		</svg>
	</span>
);

export default Loading;
