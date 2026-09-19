import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="Cities">CITIES</NavLink>
        </li>
        <li>
          <NavLink to="Countries">COUNTRIES</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
