import { SET_CURRENT_USER } from "../actions/types";

const initialState = null;

export default (user = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return payload;

    default:
      return user;
  }
};
