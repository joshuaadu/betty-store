import React from "react";
import SearchIcon from "../icons/SearchIcon";

export default function SearchBar() {
	return (
		//
		<div className=" h-full w-full flex items-center shadow-bg">
			<label htmlFor="search" className="text-gray-500  ml-4   w-4 h-4">
				<SearchIcon />
			</label>
			<input
				className="border h-full basis-auto border-none bg-inherit focus:outline-none rounded w-full text-sm text-gray-500 px-2 py-2"
				type="text"
				id="search"
				placeholder="Search"
			/>
		</div>
	);
}
