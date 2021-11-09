import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import {
  setRestaurants,
  setRestaurantSelected,
} from "../../redux/modules/restaurants";

const Map = ({ query, placeId, onClick }) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  const containerStyle = {
    width: "75vw",
    height: "100vh",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: "pt-BR",
    libraries: ["places"],
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
    console.log(map);
  }, []);

  const center = {
    lat: -18.07101074,
    lng: -39.559004,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={14}
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
