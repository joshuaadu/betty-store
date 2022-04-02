import Logo from "../UI/Logo";
import classes from "./MainNavigation.module.css";
import CustomLink from "../UI/CustomLink";
const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.nav}>
        <ul>
          <li>
            <CustomLink to="login">Log in</CustomLink>
          </li>
          <li>
            <CustomLink to="signin">Sign Up</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
