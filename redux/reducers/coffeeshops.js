import { SET_COFFEESHOPS } from "../actions/types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COFFEESHOPS:
      return payload;
    default:
      return state;
  }
};
