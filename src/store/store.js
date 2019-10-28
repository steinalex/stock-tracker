import { createStore, applyMiddleware, compose } from "redux";
import { startupMiddleware, stockMiddleware } from "./middleware";
import { combinedReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combinedReducer,
  undefined,
  composeEnhancers(applyMiddleware(...[stockMiddleware, startupMiddleware]))
);
