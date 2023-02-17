import Image from "next/image";
import { Inter } from "@next/font/google";

import TabViews from "./TabViews";

async function getData() {
	const res = await fetch("http://localhost:3000/api/login");
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function DashboardHome() {
	const data = await getData();
	console.log(data);
	return (
		<main className="w-full h-full overflow-hidden">
			{/* <div className="hidden lg:flex w-full pr-6">
				<SearchBar />
			</div> */}
			<TabViews />
		</main>
	);
}
