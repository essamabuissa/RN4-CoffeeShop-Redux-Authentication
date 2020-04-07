import { SET_COFFEESHOPS } from "../actions/types";

export default (coffeeshops = [], { type, payload }) => {
  switch (type) {
    case SET_COFFEESHOPS:
      return payload;
    default:
      return coffeeshops;
  }
};
