import { CitiesProvider } from "../components/CitiesProvider";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <main className={styles.app}>
      <CitiesProvider>
        <Sidebar />
        <Map />
        <User />
      </CitiesProvider>
    </main>
  );
}

export default AppLayout;
