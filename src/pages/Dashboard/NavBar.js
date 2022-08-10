import DashboardOutlinedIcon from "@mui/icons-material/Dashboard";
import InventoryOutlinedIcon from "@mui/icons-material/Inventory";
import PeopleOutlinedIcon from "@mui/icons-material/People";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChart";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Logo from "../../components/UI/Logo";

import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
	return (
		<nav className={styles.navBar}>
			<Logo />

			<ul>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="./"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<DashboardOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Dashboard</span>
					</NavLink>
				</li>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="products"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<TakeoutDiningOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Products</span>
					</NavLink>
				</li>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="sales"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<InventoryOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Sales</span>
					</NavLink>
				</li>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="purchases"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<ShoppingCartOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Purchases</span>
					</NavLink>
				</li>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="customers"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<PeopleOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Customers</span>
					</NavLink>
				</li>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="suppliers"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<LocalShippingOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Suppliers</span>
					</NavLink>
				</li>
				<li className={styles["main-nav-item"]}>
					<NavLink
						to="reports"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<BarChartOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Reports</span>
					</NavLink>
				</li>

				<li className={styles["main-nav-item"]}>
					<NavLink
						to="settings"
						className={({ isActive }) => {
							return isActive ? styles.active : "";
						}}
					>
						<SettingsOutlinedIcon className={styles["sidebar-icon"]} />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
