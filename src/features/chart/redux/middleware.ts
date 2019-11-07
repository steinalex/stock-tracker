import { BOOTSTRAP } from "../../../store/constants";
import { UPDATE_CHART_RANGE } from "./constants";
import { updateChartDataAction, ChartData } from "./actions";
import { SocketService } from "../../../services";
import { Middleware } from "redux";
import { AppState } from "../../../store";

type Dependancies = {
  socketService: SocketService;
};

export const chartMiddleware = ({
  socketService
}: Dependancies): Middleware<{}, AppState> => store => next => action => {
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
    socket.on("chartData", (payload: ChartData[]) => {
      store.dispatch(updateChartDataAction(payload));
    });
  }
  return next(action);
};
