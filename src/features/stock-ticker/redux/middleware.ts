import { BOOTSTRAP } from "../../../store/constants";
import { updateStockTickerAction, IStockTicker } from "./actions";
import { SocketService } from "../../../services";
import { Middleware } from "redux";
import { AppState } from "../../../store";

type Dependencies = {
  socketService: SocketService;
};

export const stockTickerMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("stockTicker", (payload: IStockTicker) => {
      store.dispatch(updateStockTickerAction(payload));
    });
  }
  return next(action);
};
