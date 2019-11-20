import { BOOTSTRAP } from "store/constants";
import {
  updateCompanySymbolsAction,
  updateSearchAction,
  ISelectedSearch
} from "./actions";
import { UPDATE_SEARCH_QUERY } from "./constants";
import { SocketService } from "services";
import { Middleware } from "redux";
import { AppState } from "store";

type Dependencies = {
  socketService: SocketService;
};

export const headlineMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();

    socket.on("suggestedCompanies", (payload: []) => {
      store.dispatch(updateCompanySymbolsAction(payload));
    });

    socket.on("sectorInformation", (payload: ISelectedSearch) => {
      store.dispatch(updateSearchAction(payload));
    });
  }
  if (action.type === UPDATE_SEARCH_QUERY) {
    socketService.get().emit("enteredSearchQuery", action.payload);
  }
  return next(action);
};
