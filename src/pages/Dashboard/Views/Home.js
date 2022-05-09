import styles from "./Home.module.scss";
import BarChartOutlinedIcon from "@mui/icons-material/BarChart";
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import SummaryWidget from "../../../components/widgets/SummaryWidget";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";

const Home = (props) => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<h2>Dashboard</h2>
			</div>
			<div className={styles.summary}>
				<SummaryWidget
					icon={<BarChartOutlinedIcon fontSize="large" />}
					label="Total Sales"
					value="2000"
					color="1"
				/>
				<SummaryWidget
					icon={<MoneyRoundedIcon fontSize="large" />}
					label="Total Cost"
					value="300000"
					color="2"
					isCurrency={true}
				/>
				<SummaryWidget
					icon={<TakeoutDiningOutlinedIcon fontSize="large" />}
					label="Products Sold"
					color="3"
					value="300000"
				/>
				<SummaryWidget
					icon={<InventoryOutlinedIcon fontSize="large" />}
					label="Stock on Hand"
					color="4"
					value="5000"
				/>
			</div>
		</section>
	);
};

export default Home;
