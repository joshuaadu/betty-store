import AuthForm from "../../components/AuthForm";
import img from "../../images/grocery-liuba-bilyk--unsplash.jpg";
import Layout from "../../layout/Layout";
import styles from "./Login.module.css";
const Login = (props) => {
	return (
		<Layout>
			<div className={styles.main}>
				<div className={styles["hero-img"]}>
					<img src={img} alt="Grocery Store attendant" />
				</div>
				<section className={styles["login-section"]}>
					<h1>Welcome Back :)</h1>
					<AuthForm />
				</section>
			</div>
		</Layout>
	);
};

export default Login;
