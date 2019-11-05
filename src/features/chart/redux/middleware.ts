import { BOOTSTRAP } from "../../../store/constants";
import { UPDATE_CHART_RANGE } from "./constants";
import { updateChartDataAction, UpdateChartDataAction } from "./actions";
import { Middleware, Dispatch, AnyAction } from "redux";
import { combinedReducer } from "../../../store";
import { SocketSerivce } from "../../../services/socketService";

export type GlobalState = ReturnType<typeof combinedReducer>;
export type ChartMiddleware = ({
  socketService
}: SocketSerivce) => Middleware<Dispatch, GlobalState, Dispatch<AnyAction>>;

export const chartMiddleware: ChartMiddleware = ({
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
    socket.on("chartData", (payload: string) => {
      store.dispatch(updateChartDataAction(payload));
    });
  }
  return next(action);
};
