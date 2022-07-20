import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Dashboard/Header";

class DashboardLayout extends Component {
	render() {
		return (
			<>
				<Header />
				<main>
					<Outlet />
				</main>
			</>
		);
	}
}

export default DashboardLayout;
