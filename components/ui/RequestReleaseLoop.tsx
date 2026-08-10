const stages = [
	{ label: "INTERFACE", className: "request-loop__node--interface" },
	{ label: "API", className: "request-loop__node--api" },
	{ label: "DATA", className: "request-loop__node--data" },
	{ label: "DEPLOY", className: "request-loop__node--deploy" },
];

const RequestReleaseLoop = () => (
	<div aria-hidden="true" className="request-loop">
		<span className="request-loop__line request-loop__line--top" />
		<span className="request-loop__line request-loop__line--right" />
		<span className="request-loop__line request-loop__line--bottom" />
		<span className="request-loop__line request-loop__line--left" />

		{stages.map((stage) => (
			<span
				key={stage.label}
				className={`request-loop__node ${stage.className}`}
			>
				<span className="request-loop__beacon" />
				{stage.label}
			</span>
		))}

		<span className="request-loop__receipt">
			<span>
				<span className="request-loop__status-dot" />
				200 OK · DEPLOYED
			</span>
		</span>
	</div>
);

export default RequestReleaseLoop;
