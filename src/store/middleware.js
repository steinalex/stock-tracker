import {
  UPDATE_SELECTED_STOCK,
  UPDATE_CHART_RANGE,
  UPDATE_SEARCH_QUERY,
  BOOTSTRAP
} from "./constants";
import {
  updateSearchAction,
  updateCompanySymbolsAction
} from "../features/headline";
import { updateTopPeersAction } from "../features/peers";
import { updateCompanyOverviewAction } from "../features/company";
import { updateLatestNewsAction } from "../features/latest-news";
import { updateKeyStatsAction } from "../features/key-stats";
import { updateStockTickerAction } from "../features/stock-ticker";
import { updateChartDataAction } from "../features/chart";
import { resetAction } from "../App-actions";

const io = require("socket.io-client");

console.log(window.location);

const HOST = window.location.hostname;
const PORT = 4000;
const SERVER = `${HOST}:${PORT}`;

const socket = io(SERVER);

export const startupMiddleware = store => next => action => {
  if (action.type === BOOTSTRAP) {
    socket.on("chartData", payload => {
      store.dispatch(updateChartDataAction(payload));
    });
    socket.on("keyStats", payload => {
      store.dispatch(updateKeyStatsAction(payload));
    });
    socket.on("latestNews", payload => {
      store.dispatch(updateLatestNewsAction(payload));
    });
    socket.on("companyOverview", payload => {
      store.dispatch(updateCompanyOverviewAction(payload));
    });
    socket.on("topPeers", payload => {
      store.dispatch(updateTopPeersAction(payload));
    });
    socket.on("sectorInformation", payload => {
      store.dispatch(updateSearchAction(payload));
    });
    socket.on("companySymbols", payload => {
      store.dispatch(updateCompanySymbolsAction(payload));
    });
    socket.on("stockTicker", payload => {
      store.dispatch(updateStockTickerAction(payload));
    });
  }

  return next(action);
};

export const stockMiddleware = store => next => action => {
  if (action.type === UPDATE_SELECTED_STOCK) {
    store.dispatch(resetAction());
    socket.emit(
      "stockName",
      action.payload.symbol,
      store.getState().chartData.selectedChartRange
    );
  } else if (action.type === UPDATE_CHART_RANGE) {
    socket.emit(
      "timeRange",
      store.getState().stockData.selectedStock.symbol,
      action.payload
    );
  } else if (action.type === UPDATE_SEARCH_QUERY) {
    socket.emit("searchQuery", action.payload);
  }
  return next(action);
};
