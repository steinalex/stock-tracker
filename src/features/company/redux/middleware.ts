import { BOOTSTRAP, UPDATE_SELECTED_STOCK } from "store/constants";
import { updateCompanyOverviewAction, CompanyOverview } from "./actions";
import { SocketService } from "services";
import { Middleware } from "redux";
import { AppState } from "store";

type Dependencies = {
  socketService: SocketService;
};

export const companyMiddleware = ({
  socketService
}: Dependencies): Middleware<{}, AppState> => store => next => action => {
  if (action.type === UPDATE_SELECTED_STOCK) {
    socketService.get().emit("getCompanyOverviewData", action.payload.symbol);
  }
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("companyOverview", (payload: CompanyOverview) => {
      store.dispatch(updateCompanyOverviewAction(payload));
    });
  }
  return next(action);
};
