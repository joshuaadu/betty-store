import "./styles.css";
import Layout from "./layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Shop from "./pages/onlineShop";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </div>
  );
}
