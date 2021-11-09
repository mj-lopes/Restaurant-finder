import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import {
  setRestaurants,
  setRestaurantSelected,
} from "../../redux/modules/restaurants";

const libraries = ["places"];
const containerStyle = {
  width: "75vw",
  height: "100vh",
};

let center = {};

const Map = ({ query, placeId, onClick }) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        center = { lat: latitude, lng: longitude };
      },
      () => {
        center = {
          lat: -18.07101074,
          lng: -39.559004,
        };
      },
    );
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: "pt-BR",
    libraries: libraries,
  });

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
    console.log(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={15}
      onLoad={onLoad}
      center={center}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
