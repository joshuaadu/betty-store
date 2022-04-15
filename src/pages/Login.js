import UserForm from "../components/UserForm";
import img from "../images/grocery-liuba-bilyk--unsplash.jpg";
import styles from "./Login.module.css";
const Login = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles["hero-img"]}>
        <img src={img} alt="Grocery Store attendant" />
      </div>
      <section className={styles["login-section"]}>
        <h1>Log In</h1>
        <UserForm />
      </section>
    </div>
  );
};
export default Login;
