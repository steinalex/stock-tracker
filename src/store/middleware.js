import { BOOTSTRAP } from "./constants";
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
