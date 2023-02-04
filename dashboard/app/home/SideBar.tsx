import React, { useState } from "react";
import CloseIcon from "../../components/icons/CloseIcon";
import DashboardIcon from "../../components/icons/DashboardIcon";
import DeliverablesIcon from "../../components/icons/DeliverablesIcon";
import InventoryIcon from "../../components/icons/InventoryIcon";
import InvoicesIcon from "../../components/icons/InvoicesIcon";
import PerformanceIcon from "../../components/icons/PerformanceIcon";
import ProductIcon from "../../components/icons/ProductIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";
import ToggleIcon from "../../components/icons/ToggleIcon";
import Avatar from "../../components/UI/Avatar";
import Logo from "../../components/UI/Logo";

export default function SideBar(props: any) {
	const [isMobileView, setIsMobileView] = useState<boolean>(false);

	const sidebarHandler = () => {
		setIsMobileView((prev) => !prev);
	};
	return (
		<>
			{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}

			<div className="absolute lg:relative w-64 h-full shadow bg-white hidden lg:block">
				<div className="px-8">
					{/* logo div */}
					<Logo />
					<Avatar />
					{/* Navbar */}
					<ul className="py-6">
						<li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<DashboardIcon />
								<span className="text-sm  ml-2">Dashboard</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<ProductIcon />
								<span className="text-sm  ml-2">Products</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<PerformanceIcon />
								<span className="text-sm  ml-2">Performance</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<DeliverablesIcon />
								<span className="text-sm  ml-2">Sales</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<DeliverablesIcon />
								<span className="text-sm  ml-2">Deliverables</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<InvoicesIcon />
								<span className="text-sm  ml-2">Invoices</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<InventoryIcon />
								<span className="text-sm  ml-2">Inventory</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
							<div className="flex items-center">
								<SettingsIcon />
								<span className="text-sm  ml-2">Settings</span>
							</div>
						</li>
					</ul>
					<SearchIcon />
				</div>
			</div>
			<div
				className={`w-64 z-40 absolute bg-gray-100 shadow md:h-full h-full flex-col justify-between lg:hidden  transition duration-150 ease-in-out ${
					!isMobileView ? "translate-x-0" : "translate-x-[-260px]"
				}`}
				id="mobile-nav"
			>
				<button
					className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
					id="mobile-toggler"
					onClick={sidebarHandler}
				>
					{isMobileView ? <ToggleIcon /> : <CloseIcon />}
				</button>
				<div className="px-8">
					<Logo />
					<Avatar />

					<ul className="mt-12">
						<li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<DashboardIcon />
								<span className="text-sm  ml-2">Dashboard</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<ProductIcon />
								<span className="text-sm  ml-2">Products</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<PerformanceIcon />
								<span className="text-sm  ml-2">Performance</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<DeliverablesIcon />
								<span className="text-sm  ml-2">Sales</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<DeliverablesIcon />
								<span className="text-sm  ml-2">Deliverables</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<InvoicesIcon />
								<span className="text-sm  ml-2">Invoices</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
							<div className="flex items-center">
								<InventoryIcon />
								<span className="text-sm  ml-2">Inventory</span>
							</div>
						</li>
						<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
							<div className="flex items-center">
								<SettingsIcon />
								<span className="text-sm  ml-2">Settings</span>
							</div>
						</li>
					</ul>
					<div className="flex justify-center mt-48 mb-4 w-full">
						<div className="relative ">
							<div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
								<SearchIcon />
							</div>
							<input
								className=" bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2"
								type="text"
								placeholder="Search"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
