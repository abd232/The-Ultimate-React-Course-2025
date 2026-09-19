import { Link, Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Spinner from "./Spinner";
import { useCities } from "./CitiesProvider";

function Sidebar() {
  const { loading, error } = useCities();

  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <Logo />
      </Link>

      <AppNav />
      {error ? <p>❌ {error} </p> : loading ? <Spinner /> : <Outlet />}
    </div>
  );
}

export default Sidebar;
