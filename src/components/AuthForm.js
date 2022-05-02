import LoginInput from "./UI/LoginInput";
import Button from "./UI/Button";
import styles from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";

const AuthForm = (props) => {
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    // Authenticate user inputs
    // then navigate to dashboard when authenticated

    navigate("../dashboard");
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <LoginInput label="Username" type="userText" />
      <LoginInput label="Password" type="password" />
      <Button type="submit" alternate>
        Login Now
      </Button>
    </form>
  );
};

export default AuthForm;
