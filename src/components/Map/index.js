import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import {
  setRestaurants,
  setRestaurantSelected,
} from "../../redux/modules/restaurants";

const libraries = ["places"];
const containerStyle = {
  width: "100%",
  height: "100vh",
};

let center = {};

const Map = ({ query, placeId, onClick }) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new window.google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: "200",
        type: ["restaurant"],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch],
  );

  const getDetails = useCallback(
    (placeId) => {
      const service = new window.google.maps.places.PlacesService(map);
      dispatch(setRestaurantSelected(null));

      const request = {
        placeId,
        fields: [
          "name",
          "opening_hours",
          "formatted_address",
          "formatted_phone_number",
        ],
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurantSelected(place));
        }
      });
    },
    [map, dispatch],
  );

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

  useEffect(() => {
    if (query) {
      searchByQuery(map, query);
    }
  }, [searchByQuery, query, map]);

  useEffect(() => {
    if (placeId) {
      getDetails(placeId);
    }
  }, [placeId, getDetails]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: "pt-BR",
    libraries: libraries,
  });

  const searchNearby = (map, center) => {
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      } else {
        console.log(status);
      }
    });
  };

  function onLoad(map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={15}
      center={center}
      onLoad={onLoad}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          onClick={() => onClick(restaurant.place_id)}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
