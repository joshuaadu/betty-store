import DashboardOutlinedIcon from "@mui/icons-material/Dashboard";
import InventoryOutlinedIcon from "@mui/icons-material/Inventory";
import PeopleOutlinedIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChart";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ListOutlinedIcon from "@mui/icons-material/List";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Logo from "../../components/UI/Logo";

import styles from "./SideBar.module.scss";
const SideBar = (props) => {
	return (
		<section className={styles.sidebar}>
			<Logo />
			<nav>
				<ul>
					<li className={styles["main-nav-item"]}>
						<DashboardOutlinedIcon />
						<span>Dashboard</span>
					</li>
					<li className={styles["main-nav-item"]}>
						<ListOutlinedIcon />
						<span>Products</span>
					</li>
					<li className={styles["main-nav-item"]}>
						<InventoryOutlinedIcon />
						<span>Sales</span>
					</li>
					<li className={styles["main-nav-item"]}>
						<ShoppingCartOutlinedIcon />
						<span>Purchase</span>
					</li>
					<li className={styles["main-nav-item"]}>
						<PeopleOutlinedIcon />
						<span>Customers</span>
					</li>
					<li className={styles["main-nav-item"]}>
						<LocalShippingOutlinedIcon />
						<span>Supplier</span>
					</li>
					<li className={styles["main-nav-item"]}>
						<BarChartOutlinedIcon />
						<span>Reports</span>
					</li>

					<li className={styles["main-nav-item"]}>
						<SettingsOutlinedIcon />
						<span>Settings</span>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default SideBar;
