import { NavLink } from "react-router-dom";
import Logo from "../components/UI/Logo";
import classes from "./MainNavigation.module.css";
const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Logo add="Admin" />
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
              to="store"
              className={({ isActive }) => {
                return isActive ? classes.active : "";
              }}
            >
              Go Shopping
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
