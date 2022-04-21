import "./styles.css";
import Layout from "./layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Shop from "./pages/onlineShop";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  );
}
