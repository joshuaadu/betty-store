import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Header.module.scss";
import Button from "../../components/UI/Button";
const Header = ({ notification, username, title }) => {
  return (
    <header className={styles.header}>
      <Button style={{ marginRight: "max(0.5rem, 5%)" }} active={true}>
        Add Sale
      </Button>
      <div
        className={`settings ${styles["header-icons"]} ${styles["header-tabs"]}`}
      >
        <SettingsOutlinedIcon fontSize="large" />
      </div>
      <div
        className={`${styles.notification} ${styles["header-icons"]} ${styles["header-tabs"]}`}
      >
        <NotificationsNoneIcon fontSize="large" />
        {notification > 0 && (
          <span className={styles["notification-alert"]}>{notification}</span>
        )}
      </div>
      <div className={`${styles["user-info"]} ${styles["header-tabs"]}`}>
        <div className={styles.avatar}>
          <img
            src="https://source.unsplash.com/random/?people"
            alt="User profile"
            loading="lazy"
          />
        </div>
        <div className={styles["user-details"]}>
          <span className={styles.username}>{username}</span>
          <span className={styles.title}>{title}</span>
        </div>

        <ArrowDropDownIcon />
      </div>
    </header>
  );
};

export default Header;
