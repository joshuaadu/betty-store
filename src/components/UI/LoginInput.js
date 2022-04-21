import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./Input.module.css";
import CheckIcon from "@mui/icons-material/Check";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const textValidFn = (text) => {
  return text.length > 4;
};

const TextInput = ({ id, label }) => {
  const [inputValid, setInputValid] = useState(false);

  const onChangeHandler = (event) => {
    setInputValid(textValidFn(event.target.value));
  };
  return (
    <>
      <AccountBoxIcon className={styles.icon} />
      <span className={styles["input-span"]}>
        <label htmlFor={id}>{label}</label>
        <input id={id} onChange={onChangeHandler} />
      </span>
      {inputValid && (
        <span
          className={`${styles["validation-icon"]} ${styles["icon-right"]}`}
        >
          <CheckIcon />
        </span>
      )}
    </>
  );
};

const PasswordInput = ({ id, label }) => {
  const [visibility, setVisibility] = useState(false);
  const changeVisibility = () => {
    setVisibility((prev) => !prev);
  };
  return (
    <>
      <LockOpenIcon className={styles.icon} />
      <span className={styles["input-span"]}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={visibility ? "text" : "password"} />
      </span>
      <span className={styles["icon-right"]} onClick={changeVisibility}>
        {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </span>
    </>
  );
};

const LoginInput = ({ label, type, id }) => {
  return (
    <div className={styles["input-wrapper"]}>
      {type === "userText" && <TextInput id={id} label={label} />}
      {type === "password" && <PasswordInput id={id} label={label} />}
    </div>
  );
};

export default LoginInput;
