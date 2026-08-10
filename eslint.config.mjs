import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
	...nextVitals,
	prettier,
	{
		name: "portfolio/react-19-migration",
		rules: {
			"react-hooks/immutability": "warn",
			"react-hooks/purity": "warn",
			"react-hooks/set-state-in-effect": "warn",
		},
	},
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
]);
