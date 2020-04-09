import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { getCoffeeShops } from "./actions";
import { checkForToken } from "./actions/authentication";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(getCoffeeShops());
store.dispatch(checkForToken());

export default store;
