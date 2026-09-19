import { CitiesProvider } from "../components/CitiesProvider";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <main className={styles.app}>
      <CitiesProvider>
        <Sidebar />
        <Map />
      </CitiesProvider>
    </main>
  );
}

export default AppLayout;
