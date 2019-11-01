import { createStore, applyMiddleware, compose } from "redux";
import { stockMiddleware } from "../features/stock-ticker";
import { searchMiddleware } from "../features/search";
import { chartMiddleware } from "../features/chart";
import { combinedReducer } from "./reducer";
import { socketService } from "../services";
import { companyMiddleware } from "../features/company";
import { keyStatsMiddleware } from "../features/key-stats";
import { latestNewsMiddleware } from "../features/latest-news";
import { topPeersMiddleware } from "../features/peers";
import { headlineMiddleware } from "../features/headline";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  stockMiddleware({ socketService }),
  chartMiddleware({ socketService }),
  searchMiddleware({ socketService }),
  companyMiddleware({ socketService }),
  keyStatsMiddleware({ socketService }),
  latestNewsMiddleware({ socketService }),
  topPeersMiddleware({ socketService }),
  headlineMiddleware({ socketService })
];

export const store = createStore(
  combinedReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middleware))
);
