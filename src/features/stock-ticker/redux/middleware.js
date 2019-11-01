import { BOOTSTRAP } from "../../../store/constants";
import { updateStockTickerAction } from "./actions";

export const stockTickerMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("stockTicker", payload => {
      store.dispatch(updateStockTickerAction(payload));
    });
  }
  return next(action);
};
