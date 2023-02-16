/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				lgray: "#F1F3F7",
				pblue: "#0745FE",
				lorange: "#FFC541",
				pblack: "#202020",
			},
		},
	},
	plugins: [],
};
