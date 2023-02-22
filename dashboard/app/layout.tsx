import "../styles/globals.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import "@tremor/react/dist/esm/tremor.css";
import { inter, lato, roboto_mono } from "./fonts";
import Providers from "./providers";
import { getData } from "../utils/fetchData";
import useAuthStore from "../stores/useAuthStore";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const initialData = await getData();
	useAuthStore.setState({ isAuthenticated: true, user: initialData });
	const data = useAuthStore.getState().user;

	// // console.log(initialData);
	console.log("Top Level Layout", data);
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
