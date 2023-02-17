import "../styles/globals.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import "@tremor/react/dist/esm/tremor.css";
import { inter, lato, roboto_mono } from "./fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`h-full ${inter.variable} ${roboto_mono.variable} ${lato.variable}`}
		>
			<head />
			<body className="h-full overflow-hidden text-pblack">{children}</body>
		</html>
	);
}
