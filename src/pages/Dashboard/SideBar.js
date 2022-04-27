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

import styles from "./SideBar.module.scss";
const SideBar = (props) => {
	return (
		<section className={styles.sidebar}>
			<nav>
				<ul>
					<li>
						<DashboardOutlinedIcon />
						Dashboard
					</li>
					<li>
						<ListOutlinedIcon />
						Products
					</li>
					<li>
						<PeopleOutlinedIcon />
						Customers
					</li>
					<li>
						<InventoryOutlinedIcon />
						Sales
					</li>
					<li>
						<LocalShippingOutlinedIcon />
						Supplier
					</li>
					<li>
						<ShoppingCartOutlinedIcon />
						Purchase
					</li>
					<li>
						<BarChartOutlinedIcon />
						Reports
					</li>

					<li>
						<SettingsOutlinedIcon />
						Settings
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default SideBar;
