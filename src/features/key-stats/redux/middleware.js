import { BOOTSTRAP } from "../../../store/constants";
import { updateKeyStatsAction } from "./actions";

export const keyStatsMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("keyStats", payload => {
      store.dispatch(updateKeyStatsAction(payload));
    });
  }
  return next(action);
};
