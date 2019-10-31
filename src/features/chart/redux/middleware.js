import { UPDATE_CHART_RANGE } from "../../../store/constants";

export const chartMiddleware = ({
  socketService
}) => store => next => action => {
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
