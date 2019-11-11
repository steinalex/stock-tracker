import { BOOTSTRAP } from "../../../store/constants";
import { updateKeyStatsAction, IKeyStats } from "./actions";
import { SocketService } from "../../../services";
import { Middleware } from "redux";
import { AppState } from "../../../store";

type Dependencies = {
  socketService: SocketService;
};

export const keyStatsMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("keyStats", (keyStats: IKeyStats) => {
      store.dispatch(updateKeyStatsAction(keyStats));
    });
  }
  return next(action);
};
