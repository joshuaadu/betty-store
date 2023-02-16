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
	return (
		<div className="w-full h-full bg-lgray overflow-hidden">
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
	);
}
