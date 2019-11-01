import { BOOTSTRAP } from "../../../store/constants";
import { updateTopPeersAction } from "./actions";

export const topPeersMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("topPeers", payload => {
      store.dispatch(updateTopPeersAction(payload));
    });
  }
  return next(action);
};
