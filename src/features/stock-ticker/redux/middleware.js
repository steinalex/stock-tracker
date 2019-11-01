import { BOOTSTRAP } from "../../../store/constants";
import { UPDATE_SELECTED_STOCK } from "./constants";
import { resetAction } from "../../../actions";
import { updateStockTickerAction } from "./actions";

export const stockMiddleware = ({
  socketService
}) => store => next => action => {
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
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("stockTicker", payload => {
      store.dispatch(updateStockTickerAction(payload));
    });
  }
  return next(action);
};
