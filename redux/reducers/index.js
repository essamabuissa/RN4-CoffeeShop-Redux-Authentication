import { combineReducers } from "redux";

import coffeeshops from "./coffeeshops";
import cart from "./cart";

export default combineReducers({ coffeeshops, cart });
