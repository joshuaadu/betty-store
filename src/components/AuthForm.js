import LoginInput from "./UI/LoginInput";
import Button from "./UI/Button";
import styles from "./AuthForm.module.css";

const AuthForm = (props) => {
  return (
    <form className={styles.form}>
      <LoginInput label="Username" type="userText" />
      <LoginInput label="Password" type="password" />
      <Button alternate>Login Now</Button>
    </form>
  );
};

export default AuthForm;
