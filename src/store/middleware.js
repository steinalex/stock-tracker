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
import { socketService } from "../services";

export const startupMiddleware = store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
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
    socketService
      .get()
      .emit(
        "stockName",
        action.payload.symbol,
        store.getState().chartData.selectedChartRange
      );
  } else if (action.type === UPDATE_CHART_RANGE) {
    socketService
      .get()
      .emit(
        "timeRange",
        store.getState().stockData.selectedStock.symbol,
        action.payload
      );
  } else if (action.type === UPDATE_SEARCH_QUERY) {
    socketService.get().emit("searchQuery", action.payload);
  }
  return next(action);
};
