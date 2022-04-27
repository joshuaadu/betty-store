import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Dashboard.module.scss";

const Dashboard = (props) => {
	return (
		<div className={styles.dashboard}>
			<SideBar />
			<Header notification="2" username="Betty Adu-Mensah" title="Manager" />
			<main></main>
		</div>
	);
};

export default Dashboard;
