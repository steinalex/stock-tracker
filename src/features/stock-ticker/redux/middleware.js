import { UPDATE_SELECTED_STOCK } from "../../../store/constants";
import { resetAction } from "../../../actions";

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
