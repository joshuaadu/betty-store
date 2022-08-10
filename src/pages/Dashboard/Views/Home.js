import styles from "./Home.module.scss";
import BarChartOutlinedIcon from "@mui/icons-material/BarChart";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import KPIWidget from "../../../components/widgets/KPIWidget";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";
import { useSelector } from "react-redux";

const Home = (props) => {
	const sales = useSelector((state) => state.sales);
	const products = useSelector((state) => state.products);

	return (
		<section className={styles.container}>
			<div className={styles.heading}>
				<h2>Dashboard</h2>
			</div>
			<div className={styles.summary}>
				<KPIWidget
					icon={<BarChartOutlinedIcon fontSize="large" />}
					label="Total Sales"
					value={sales.totalSales}
					color="1"
				/>
				<KPIWidget
					icon={<MoneyRoundedIcon fontSize="large" />}
					label="Total Revenue"
					value={sales.revenue}
					color="2"
					isCurrency={true}
				/>
				<KPIWidget
					icon={<TakeoutDiningOutlinedIcon fontSize="large" />}
					label="Products Sold"
					color="3"
					value={products.sold}
				/>
				<KPIWidget
					icon={<InventoryOutlinedIcon fontSize="large" />}
					label="Stock on Hand"
					color="4"
					value={products.currentStock}
				/>
			</div>
		</section>
	);
};

export default Home;
