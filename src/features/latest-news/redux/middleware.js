import { BOOTSTRAP } from "../../../store/constants";
import { updateLatestNewsAction } from "./actions";

export const latestNewsMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("latestNews", payload => {
      store.dispatch(updateLatestNewsAction(payload));
    });
  }
  return next(action);
};
