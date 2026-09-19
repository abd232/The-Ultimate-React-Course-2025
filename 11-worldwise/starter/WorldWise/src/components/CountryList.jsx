import { useCities } from "./CitiesProvider";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
function CountryList() {
  const { cities } = useCities();
  if (cities.lenght === 0)
    return (
      <Message
        message={"Please chose you first country from the map to get Starting"}
      />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, city];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
