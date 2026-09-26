import { useCities } from "./CitiesProvider";

import Message from "./Message";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, onDeleteCity } = useCities();

  if (cities.lenght === 0)
    return (
      <Message
        message={"Please chose you first country from the map to get Starting"}
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} handleDeleteCity={onDeleteCity} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
