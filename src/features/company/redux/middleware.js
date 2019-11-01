import { BOOTSTRAP } from "../../../store/constants";
import { updateCompanyOverviewAction } from "./actions";

export const companyMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    socket.on("companyOverview", payload => {
      store.dispatch(updateCompanyOverviewAction(payload));
    });
  }
  return next(action);
};
