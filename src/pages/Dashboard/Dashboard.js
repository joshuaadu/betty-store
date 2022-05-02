import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Dashboard.module.scss";

const Dashboard = (props) => {
	return (
		<div className={styles.dashboard}>
			<SideBar />
			<div className={styles["main-container"]}>
				<Header notification="2" username="Betty Adu-Mensah" title="Manager" />
			</div>
		</div>
	);
};

export default Dashboard;
