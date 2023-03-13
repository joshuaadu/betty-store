import Link from "next/link";
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
import SideBarNav from "./SideBarNav";
import SideBarNavMobile from "./SideBarNavMobile";

export default function SideBar(props: any) {
	return (
		<>
			{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}

			<SideBarNav />
			<SideBarNavMobile />
		</>
	);
}
