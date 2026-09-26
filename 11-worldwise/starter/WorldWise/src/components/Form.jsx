// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "./CitiesProvider";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const navigator = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [searchParams] = useSearchParams();
  const { onAddCity } = useCities();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  function handleAddCity() {
    onAddCity(cityName, country, convertToEmoji(countryCode), date, notes, {
      lat: lat,
      lng: lng,
    });
    navigator("/app/cities");
  }

  useEffect(
    function () {
      async function fetchCityInformation() {
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log(data);
        setCityName(data.city);
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      }
      fetchCityInformation();
    },
    [lat, lng],
  );

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type="primary"
          onClickFunction={(e) => {
            e.preventDefault();
            handleAddCity();
          }}
        >
          Add
        </Button>
        <Button
          type="back"
          onClickFunction={(e) => {
            e.preventDefault();
            navigator(-2);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
