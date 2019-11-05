import { BOOTSTRAP } from "../../../store/constants";
import { UPDATE_CHART_RANGE } from "./constants";
import { updateChartDataAction } from "./actions";

export const chartMiddleware = ({ socketService }: any) => (store: any) => (
  next: any
) => (action: any) => {
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
    socket.on("chartData", (payload: any) => {
      store.dispatch(updateChartDataAction(payload));
    });
  }
  return next(action);
};
