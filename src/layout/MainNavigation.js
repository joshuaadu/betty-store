import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import classes from "./MainNavigation.module.css";
const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) => {
                return isActive ? classes.active : "";
              }}
            >
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="signup"
              className={({ isActive }) => {
                return isActive ? classes.active : "";
              }}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
