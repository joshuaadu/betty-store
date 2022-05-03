import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Dashboard.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Suppliers from "./Views/Suppliers";
import Settings from "./Views/Settings";
import Products from "./Views/Products";
import Reports from "./Views/Reports";
import Sales from "./Views/Sales";
import Customers from "./Views/Customers";
import Purchases from "./Views/Purchases";

const Dashboard = (props) => {
	return (
		<div className={styles.dashboard}>
			<SideBar />
			<div className={styles["main-container"]}>
				<Header notification="2" username="Betty Adu-Mensah" title="Manager" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="reports" element={<Reports />} />
					<Route path="suppliers" element={<Suppliers />} />
					<Route path="sales" element={<Sales />} />
					<Route path="customers" element={<Customers />} />
					<Route path="settings" element={<Settings />} />
					<Route path="purchases" element={<Purchases />} />
				</Routes>
			</div>
		</div>
	);
};

export default Dashboard;
