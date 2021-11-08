import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import {
  setRestaurants,
  setRestaurantSelected,
} from "../../redux/modules/restaurants";

const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);
  const { google, query, placeId, onClick } = props;

  const searchByQuery = useCallback(
    (map, query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: "200",
        type: ["restaurant"],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch, google],
  );

  const getDetails = useCallback(
    (placeId) => {
      const service = new google.maps.places.PlacesService(map);
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
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurantSelected(place));
        }
      });
    },
    [google, map, dispatch],
  );

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

  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: "20000",
      type: ["restaurant"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      } else {
        console.log(status);
      }
    });
  };

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      containerStyle={{
        width: "73vw",
        height: "100vh",
        overflow: "hidden",
      }}
      style={{ width: "73vw", height: "100vh" }}
      zoom={15}
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
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapContainer);
