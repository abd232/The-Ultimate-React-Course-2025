import { Link } from "react-router-dom";

import { useCities } from "./CitiesProvider";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city, handleDeleteCity }) {
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity !== null
            ? currentCity.id === city.id
              ? styles["cityItem--active"]
              : ""
            : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            e.preventDefault();
            handleDeleteCity(city.id);
          }}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}
export default CityItem;
