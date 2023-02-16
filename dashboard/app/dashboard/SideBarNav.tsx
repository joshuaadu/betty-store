import React, { useState } from "react";
import CartIcon from "../../components/icons/CartIcon";
import CategoriesIcon from "../../components/icons/CategoriesIcon";
import CustomersIcon from "../../components/icons/CustomersIcon";
import DashboardIcon from "../../components/icons/DashboardIcon";
import InventoryIcon from "../../components/icons/InventoryIcon";
import ProductIcon from "../../components/icons/ProductIcon";
import SalesIcon from "../../components/icons/SalesIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";
import SupplyChainIcon from "../../components/icons/SupplyChainIcon";
import Avatar from "../../components/UI/Avatar";
import Logo from "../../components/UI/Logo";
import NavLink from "./NavLink";

export default function SideBarNav() {
	// const router = useRouter();

	return (
		<div className="absolute lg:relative w-64 h-full shadow bg-white hidden lg:block">
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
