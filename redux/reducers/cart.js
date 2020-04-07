import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      const newItem = payload;
      const foundItem = state.items.find(
        item => item.drink === newItem.drink && item.option === newItem.option
      );
      if (foundItem) {
        foundItem.quantity++;
        return [...state];
      } else return [...state, newItem];

    case REMOVE_ITEM:
      return state.items.filter(item => item !== payload);

    case CHECKOUT:
      return [];

    default:
      return state;
  }
};
