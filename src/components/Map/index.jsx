import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { useDispatch, useSelector } from "react-redux";

import { setRestaurants } from "../../redux/modules/restaurants";

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { google, query } = props;
  const { restaurants } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (query) searchByQuery(query);
  }, [query]);

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "5000",
      type: ["restaurant"],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function searchNearby(map) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    >
      {restaurants &&
        restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            name={restaurant.name}
            position={{
              lat: restaurant.geometry.location.lat(),
              lng: restaurant.geometry.location.lng(),
            }}
          />
        ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapContainer);
