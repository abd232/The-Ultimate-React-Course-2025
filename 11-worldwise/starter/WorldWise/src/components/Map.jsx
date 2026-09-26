import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "./CitiesProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import useGeolocation from "../hooks/useGeolocation";
import { useEffect, useState } from "react";

function ChangeCenter({ position }) {
  const map = useMap();

  map.setView(position);

  return null;
}

function Map() {
  const navigater = useNavigate();
  const { currentCity, cities } = useCities();
  const [, setSearchParams] = useSearchParams();

  const {
    isLoading,
    getPosition,
    setPosition: setGeolocationPosition,
    position: geoLocationPosition,
  } = useGeolocation();

  const [position, setPosition] = useState(
    currentCity === null
      ? [51.505, -0.09]
      : [Number(currentCity.position.lat), Number(currentCity.position.lng)],
  );
  function DetectClick() {
    useMapEvent("click", (e) => {
      setGeolocationPosition(null);
      setPosition([e.latlng.lat, e.latlng.lng]);

      navigater(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    });

    return null;
  }
  useEffect(
    function () {
      function syncCurrentCityPosition() {
        if (currentCity !== null)
          setPosition([
            Number(currentCity.position.lat),
            Number(currentCity.position.lng),
          ]);
      }

      syncCurrentCityPosition();
    },
    [currentCity],
  );

  useEffect(
    function () {
      function syncMapPosition() {
        if (geoLocationPosition !== null) {
          setPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
          setSearchParams({
            lat: geoLocationPosition.lat,
            lng: geoLocationPosition.lng,
          });
        }
      }
      syncMapPosition();
    },
    [geoLocationPosition, setSearchParams],
  );

  return (
    <div className={styles.MapContainer}>
      {!geoLocationPosition && (
        <Button
          type="position"
          onClickFunction={() => {
            navigater("form");
            getPosition();
            //setPosition(geoLocationPosition);
          }}
        >
          {isLoading ? "Getting you location" : "Get Your Postion"}
        </Button>
      )}

      <MapContainer
        className={styles.Map}
        center={position}
        zoom={5}
        scrollWheelZoom={true}
      >
        <ChangeCenter position={position} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup></Popup>
            </Marker>
          );
        })}
        <DetectClick />
      </MapContainer>
    </div>
  );
}

export default Map;
