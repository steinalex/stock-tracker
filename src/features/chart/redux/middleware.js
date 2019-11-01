import { UPDATE_CHART_RANGE, BOOTSTRAP } from "../../../store/constants";
import { updateChartDataAction } from "./actions";

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
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("chartData", payload => {
      store.dispatch(updateChartDataAction(payload));
    });
  }
  return next(action);
};
