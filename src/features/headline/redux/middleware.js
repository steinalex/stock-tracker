import { BOOTSTRAP } from "../../../store/constants";
import { updateCompanySymbolsAction, updateSearchAction } from "./actions";
import { UPDATE_SEARCH_QUERY } from "./constants";
const dataTofetch = [
  ["sectorInformation", updateSearchAction],
  ["companySymbols", updateCompanySymbolsAction]
];

export const headlineMiddleware = ({
  socketService
}) => store => next => action => {
  if (action.type === BOOTSTRAP) {
    const socket = socketService.get();
    dataTofetch.forEach(([name, action]) => {
      socket.on(name, payload => {
        store.dispatch(action(payload));
      });
    });
  }
  if (action.type === UPDATE_SEARCH_QUERY) {
    socketService.get().emit("searchQuery", action.payload);
  }
  return next(action);
};
