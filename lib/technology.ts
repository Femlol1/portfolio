const TECHNOLOGY_NAMES: Record<string, string> = {
	"/re.svg": "React",
	"/next.svg": "Next.js",
	"/tail.svg": "Tailwind CSS",
	"/ts.svg": "TypeScript",
	"/firebase.svg": "Firebase",
	"/c.svg": "C#",
	"/mongodb.svg": "MongoDB",
	"/gsap.svg": "GSAP",
	"/three.svg": "Three.js",
};

export function getTechnologyName(iconPath: string) {
	return TECHNOLOGY_NAMES[iconPath] ?? "Web technology";
}
