import { BOOTSTRAP } from "store/constants";
import { updateTopPeersAction, IPeers } from "./actions";
import { Middleware } from "redux";
import { AppState } from "store";
import { SocketService } from "services";

type Dependencies = {
  socketService: SocketService;
};

export const topPeersMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("topPeers", (payload: IPeers[]) => {
      store.dispatch(updateTopPeersAction(payload));
    });
  }
  return next(action);
};
