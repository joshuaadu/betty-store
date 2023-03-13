import { Inter, Roboto_Mono, Lato } from "next/font/google";

export const inter = Inter({
	variable: "--font-inter",
	display: "swap",
	subsets: ["latin"],
});

export const roboto_mono = Roboto_Mono({
	variable: "--font-roboto-mono",
	display: "swap",
	subsets: ["latin"],
});

export const lato = Lato({
	weight: ["100", "300", "400", "700", "900"],
	variable: "--font-lato",
	display: "swap",
	subsets: ["latin"],
});
