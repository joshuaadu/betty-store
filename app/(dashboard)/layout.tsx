import type { Metadata } from "next";
import { inter, lato, roboto_mono } from "./../fonts";
import Providers from "./../providers";
import { getData } from "../../utils/fetchData";
import useAuthStore from "../../stores/useAuthStore";
import StoreInitializer from "../../stores/initializers/StoreInitializer";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

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

export default async function DashboardLayout({
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
				<Providers>
					<div className="w-full h-full bg-lgray overflow-hidden">
						<div className="h-full flex flex-no-wrap">
							{/* Sidebar starts */}
							<StoreInitializer user={data} />
							<SideBar />
							{/* Sidebar ends */}
							{/* Remove class [ h-64 ] when adding a card block */}
							{/* <div className="container mx-auto py-10 h-64 lg:w-full w-11/12 px-8"> */}
							{/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
							<div className="h-full rounded py-10 mx-auto lg:w-6/8 w-11/12 px-8 overflow-hidden">
								<NavBar />
								{children}
							</div>
							{/* </div> */}
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
