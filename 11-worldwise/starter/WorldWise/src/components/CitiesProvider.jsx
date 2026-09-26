import { useCallback } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        setError("Could not reach the cities");
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchCities();
  }, []);
  async function onAddCity(cityName, country, emoji, date, notes, postion) {
    const res = await fetch(`${BASE_URL}/cities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cityName: cityName,
        country: country,
        emoji: emoji,
        date: date,
        notes: notes,
        position: postion,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add city");
    }

    setCities([
      ...cities,
      {
        cityName: cityName,
        country: country,
        emoji: emoji,
        date: date,
        notes: notes,
        position: postion,
      },
    ]);
  }

  async function onDeleteCity(id) {
    const res = await fetch(`${BASE_URL}/cities/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete city");
    }

    setCities((cities) => cities.filter((city) => city.id !== id));
  }

  const getCity = useCallback(async function (id) {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch {
      setError("Could not reach the current city");
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        error,
        currentCity,
        getCity,
        onAddCity,
        onDeleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citites context was used outside CititesPorivider");
  return context;
}

export { CitiesProvider, useCities };
