import type { Metadata } from "next";
import { inter, lato, roboto_mono } from "./../fonts";
import Providers from "./../providers";

import "../../styles/globals.css";
//core
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "@tremor/react/dist/esm/tremor.css";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome Betty Store Dashboard",
};

export default function AuthLayout({
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
			<body className="h-full overflow-hidden text-pblack">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
