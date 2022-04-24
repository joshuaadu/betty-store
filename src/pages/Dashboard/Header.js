import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Header.module.scss";
const Header = ({ notification, username, title }) => {
  return (
    <header className={styles.header}>
      <div
        className={`settings ${styles["header-icons"]} ${styles["header-tabs"]}`}
      >
        <SettingsIcon fontSize="large" />
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
