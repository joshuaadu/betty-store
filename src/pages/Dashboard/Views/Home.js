import styles from "./Home.module.scss";
import BarChartOutlinedIcon from "@mui/icons-material/BarChart";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import CurrencyPoundOutlinedIcon from "@mui/icons-material/CurrencyPoundOutlined";
import SummaryWidget from "../../../components/widgets/SummaryWidget";

const Home = (props) => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<h2>Dashboard</h2>
			</div>
			<div className={styles.summary}>
				<SummaryWidget
					icon={<BarChartOutlinedIcon />}
					label="Total Sales"
					value="2000"
					color="1"
				/>
				<SummaryWidget
					icon={<CurrencyPoundOutlinedIcon />}
					label="Total Cost"
					value="$300000"
					color="2"
				/>
				<SummaryWidget
					icon={<TakeoutDiningOutlinedIcon />}
					label="Products Sold"
					color="3"
				/>
				<SummaryWidget
					icon={<InventoryOutlinedIcon />}
					label="Stock on Hand"
					color="4"
				/>
			</div>
		</section>
	);
};

export default Home;
