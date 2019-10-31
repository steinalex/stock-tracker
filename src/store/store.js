import { createStore, applyMiddleware, compose } from "redux";
import { startupMiddleware } from "./middleware";
import { stockMiddleware } from "../features/stock-ticker";
import { searchMiddleware } from "../features/search";
import { chartMiddleware } from "../features/chart";
import { combinedReducer } from "./reducer";
import { socketService } from "../services";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  stockMiddleware(socketService),
  startupMiddleware(socketService),
  chartMiddleware(socketService),
  searchMiddleware(socketService)
];

export const store = createStore(
  combinedReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
);
