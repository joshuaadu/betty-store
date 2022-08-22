import Header from "./Header";
import NavBar from "./NavBar";
import styles from "../../styles/Dashboard.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Views";
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
			<NavBar />
			<main className={styles["main-container"]}>
				<Header notification="2" username="Betty Adu-Mensah" title="Manager" />
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="reports" element={<Reports />} />
					<Route path="suppliers" element={<Suppliers />} />
					<Route path="sales" element={<Sales />} />
					<Route path="customers" element={<Customers />} />
					<Route path="settings" element={<Settings />} />
					<Route path="purchases" element={<Purchases />} />
				</Routes>
			</main>
		</div>
	);
};

export default Dashboard;
