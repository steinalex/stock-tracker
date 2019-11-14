import { BOOTSTRAP } from "store/constants";
import { updateLatestNewsAction, ILatestNews } from "./actions";
import { SocketService } from "services";
import { Middleware } from "redux";
import { AppState } from "store";

type Dependencies = {
  socketService: SocketService;
};

export const latestNewsMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("latestNews", (latestNews: ILatestNews[]) => {
      store.dispatch(updateLatestNewsAction(latestNews));
    });
  }
  return next(action);
};
