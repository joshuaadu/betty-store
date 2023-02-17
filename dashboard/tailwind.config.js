/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-roboto-mono)"],
				lato: ["var(--font-lato)"],
			},
			colors: {
				primary: {
					DEFAULT: colors.blue,
					50: "#e6f6ff",
					100: "#b3ebff",
				},
				secondary: {
					DEFAULT: colors.slate,
					50: "#f4f5f7",
					100: "#e4e7eb",
				},
				lgray: "#F1F3F7",
				pblue: "#0745FE",
				lorange: "#FFC541",
				pblack: "#202020",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
