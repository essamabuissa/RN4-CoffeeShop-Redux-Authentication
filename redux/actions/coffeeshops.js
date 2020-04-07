import instance from "./instance";

import { SET_COFFEESHOPS } from "./types";

export const getCoffeeShops = () => async dispatch => {
  try {
    const res = await instance.get("?format=json");
    const coffeeshops = res.data;
    dispatch({
      type: SET_COFFEESHOPS,
      payload: coffeeshops
    });
  } catch (err) {
    console.error("Error while fetching shops", err);
  }
};
