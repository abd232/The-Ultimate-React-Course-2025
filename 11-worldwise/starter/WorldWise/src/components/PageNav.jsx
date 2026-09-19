import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.NavLink} to="/">
        <Logo />
      </NavLink>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Pricing">
            Pricing
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.NavLink} to="Product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="Login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
