import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./Input.module.css";
import CheckIcon from "@mui/icons-material/Check";

const Input = ({ label, type, id }) => {
  return (
    <div className={styles["input-wrapper"]}>
      <AccountBoxIcon className={styles.icon} />
      <span className={styles["input-span"]}>
        <label htmlFor={id}>{label}</label>
        <input id={id} />
      </span>
      <span className={styles["validation-icon"]}>
        <CheckIcon />
      </span>
    </div>
  );
};

export default Input;
