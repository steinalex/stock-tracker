import { UPDATE_SEARCH_QUERY } from "../../../store/constants";

export const searchMiddleware = socketService => store => next => action => {
  if (action.type === UPDATE_SEARCH_QUERY) {
    socketService.get().emit("searchQuery", action.payload);
  }
  return next(action);
};
