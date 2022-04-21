import Header from "./Header";
import SideBar from "./SideBar";

const Dashboard = (props) => {
  return (
    <div className="dasboard">
      <Header />
      <SideBar />
      <main></main>
    </div>
  );
};

export default Dashboard;
