import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header>
      <div className={`settings ${styles["header-icons"]}`}></div>
      <div className={`notifications ${styles["header-icons"]}`}></div>
      <div className={styles["user-info"]}>
        <div className={styles.avatar}></div>
        <div className={styles["user-details"]}></div>
        <div className={styles["header-icons"]}></div>
      </div>
    </header>
  );
};

export default Header;
