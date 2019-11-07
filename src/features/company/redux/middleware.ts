import { BOOTSTRAP } from "../../../store/constants";
import { updateCompanyOverviewAction, CompanyOverview } from "./actions";
import { SocketService } from "../../../services";
import { Middleware } from "redux";
import { GlobalState } from "../../../store";

type Dependancies = {
  socketService: SocketService;
};

export const companyMiddleware = ({
  socketService
}: Dependancies): Middleware<{}, GlobalState> => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("companyOverview", (payload: CompanyOverview) => {
      store.dispatch(updateCompanyOverviewAction(payload));
    });
  }
  return next(action);
};
