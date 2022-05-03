import "./styles.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Home/Login";
import SignUp from "./pages/Home/SignUp";
import Shop from "./pages/Home/onlineShop";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Navigate to="login" />} />
				<Route path="login" element={<Login />} />
				<Route path="shop" element={<Shop />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="dashboard/*" element={<Dashboard />} />
			</Routes>
		</div>
	);
}
