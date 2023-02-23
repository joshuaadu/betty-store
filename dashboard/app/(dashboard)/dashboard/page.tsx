import Image from "next/image";
import { Inter } from "@next/font/google";

import TabViews from "./TabViews";
import { getData } from "../../../utils/fetchData";
import useAuthStore from "../../../stores/useAuthStore";

export default async function DashboardHome() {
	// const initialData = await getData();
	// useAuthStore.setState({ isAuthenticated: true, user: initialData });

	const data = useAuthStore.getState().user;

	// console.log(initialData);
	console.log("Dashboard page", data);

	return (
		<main className="w-full h-full overflow-hidden">
			{/* <div className="hidden lg:flex w-full pr-6">
				<SearchBar />
			</div> */}
			<TabViews data={"data"} />
		</main>
	);
}
