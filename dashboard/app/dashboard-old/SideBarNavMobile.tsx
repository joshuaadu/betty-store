import React, { useState } from "react";
import CartIcon from "../../components/icons/CartIcon";
import CategoriesIcon from "../../components/icons/CategoriesIcon";
import CloseIcon from "../../components/icons/CloseIcon";
import CustomersIcon from "../../components/icons/CustomersIcon";
import DashboardIcon from "../../components/icons/DashboardIcon";
import InventoryIcon from "../../components/icons/InventoryIcon";
import ProductIcon from "../../components/icons/ProductIcon";
import SalesIcon from "../../components/icons/SalesIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";
import SupplyChainIcon from "../../components/icons/SupplyChainIcon";
import ToggleIcon from "../../components/icons/ToggleIcon";
import Avatar from "../../components/UI/Avatar";
import Logo from "../../components/UI/Logo";
import NavLink from "./NavLink";

export default function SideBarNavMobile() {
	const [isMobileView, setIsMobileView] = useState<boolean>(false);

	const sidebarHandler = () => {
		setIsMobileView((prev) => !prev);
	};
	return (
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
				{/* logo div */}
				<Logo />
				<Avatar />
				{/* Navbar */}
				<ul className="py-6">
					<NavLink
						href="/dashboard"
						icon={<DashboardIcon />}
						text="Dashboard"
					/>

					<NavLink
						href="/dashboard/products"
						icon={<ProductIcon />}
						text="Products"
					/>

					<NavLink
						href="/dashboard/inventory"
						icon={<InventoryIcon />}
						text="Inventory"
					/>

					<NavLink href="/dashboard/sales" icon={<SalesIcon />} text="Sales" />

					<NavLink
						href="/dashboard/categories"
						icon={<CategoriesIcon />}
						text="Categories"
					/>

					<NavLink href="/dashboard/orders" icon={<CartIcon />} text="Orders" />

					<NavLink
						href="/dashboard/customers"
						icon={<CustomersIcon />}
						text="Customers"
					/>

					<NavLink
						href="/dashboard/suppliers"
						icon={<SupplyChainIcon />}
						text="Suppliers"
					/>

					<NavLink
						href="/dashboard/settings"
						icon={<SettingsIcon />}
						text="Settings"
					/>
				</ul>
			</div>
		</div>
	);
}
