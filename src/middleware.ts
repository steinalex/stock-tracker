import { UPDATE_SELECTED_STOCK } from "./store/constants";
import { resetAction } from "./actions";
import { SocketService } from "./services";
import { Middleware } from "redux";
import { AppState } from "./store";

type Dependencies = {
  socketService: SocketService;
};

export const stockMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === UPDATE_SELECTED_STOCK) {
    store.dispatch(resetAction());
    socketService.get().emit("enteredStockName", action.payload.symbol);

    socketService
      .get()
      .emit(
        "getChartData",
        action.payload.symbol,
        store.getState().chartData.selectedChartRange
      );

    socketService.get().emit("getKeyStatsData", action.payload.symbol);

    socketService.get().emit("getLatestNewsData", action.payload.symbol);

    socketService.get().emit("getCompanyOverviewData", action.payload.symbol);

    socketService.get().emit("getTopPeersData", action.payload.symbol);

    socketService.get().emit("getSectorData", action.payload.symbol);
  }
  return next(action);
};
