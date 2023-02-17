import Image from "next/image";
import { Inter } from "@next/font/google";

import TabViews from "./TabViews";
import { getData } from "../../../utils/fetchData";

export default async function DashboardHome() {
	const initialData = await getData();
	console.log(initialData);
	return (
		<main className="w-full h-full overflow-hidden">
			{/* <div className="hidden lg:flex w-full pr-6">
				<SearchBar />
			</div> */}
			<TabViews data={initialData} />
		</main>
	);
}
