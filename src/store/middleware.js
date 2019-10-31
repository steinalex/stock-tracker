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
import { resetAction } from "../actions";

const dataTofetch = [
  ["chartData", updateChartDataAction],
  ["keyStats", updateKeyStatsAction],
  ["latestNews", updateLatestNewsAction],
  ["companyOverview", updateCompanyOverviewAction],
  ["topPeers", updateTopPeersAction],
  ["sectorInformation", updateSearchAction],
  ["companySymbols", updateCompanySymbolsAction],
  ["stockTicker", updateStockTickerAction]
];

export const startupMiddleware = socketService => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();

    dataTofetch.forEach(([name, action]) => {
      socket.on(name, payload => {
        store.dispatch(action(payload));
      });
    });
  }

  return next(action);
};

export const stockMiddleware = socketService => store => next => action => {
  if (action.type === UPDATE_SELECTED_STOCK) {
    store.dispatch(resetAction());
    socketService
      .get()
      .emit(
        "stockName",
        action.payload.symbol,
        store.getState().chartData.selectedChartRange
      );
  }
  return next(action);
};

export const chartMiddleware = socketService => store => next => action => {
  if (action.type === UPDATE_CHART_RANGE) {
    socketService
      .get()
      .emit(
        "timeRange",
        store.getState().stockData.selectedStock.symbol,
        action.payload
      );
  }
  return next(action);
};

export const searchMiddleware = socketService => store => next => action => {
  if (action.type === UPDATE_SEARCH_QUERY) {
    socketService.get().emit("searchQuery", action.payload);
  }
  return next(action);
};
