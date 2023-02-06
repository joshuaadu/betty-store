"use client";
import { transcode } from "buffer";
import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const [isMobileView, setIsMobileView] = useState(false);
	// function sidebarHandler(flag) {
	//     if (flag) {
	//         sideBar.style.transform = "translateX(0px)";
	//         openSidebar.classList.add("hidden");
	//         closeSidebar.classList.remove("hidden");
	//     } else {
	//         sideBar.style.transform = "translateX(-260px)";
	//         closeSidebar.classList.add("hidden");
	//         openSidebar.classList.remove("hidden");
	//     }
	// }
	const [isMobileView, setIsMobileView] = useState<boolean>(false);

	const sidebarHandler = () => {
		setIsMobileView((prev) => !prev);
	};
	return (
		<html lang="en" className="h-full">
			<head />
			<body className="h-full overflow-hidden">
				<div className="w-full h-full bg-gray-200 overflow-hidden">
					<div className="h-full flex flex-no-wrap">
						{/* Sidebar starts */}
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
			</body>
		</html>
	);
}
