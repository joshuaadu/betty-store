import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Dashboard.module.scss";

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <Header notification="2" username="Betty Adu-Mensah" title="Manager" />
      <SideBar />
      <main></main>
    </div>
  );
};

export default Dashboard;
