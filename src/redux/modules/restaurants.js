export const types = {
  SET_RESTAURANTS: "restaurants/SET_RESTAURANTS",
  SET_RESTAURANT: "restaurants/SET_RESTAURANT",
};

const initialState = {
  restaurants: [],
  restaurantSelected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "restaurants/SET_RESTAURANTS":
      return { ...state, restaurants: action.payload };
    case "restaurants/SET_RESTAURANT":
      return { ...state, restaurantSelected: action.payload };
    default:
      return state;
  }
}

export function setRestaurants(restaurants) {
  return {
    type: types.SET_RESTAURANTS,
    payload: restaurants,
  };
}

export function setRestaurantSelected(restaurantSelected) {
  return {
    type: types.SET_RESTAURANT,
    payload: restaurantSelected,
  };
}
