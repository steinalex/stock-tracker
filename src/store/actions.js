import { ON_STOCK_DATA_RECIEVED, BOOTSTRAP } from "./constants";

export const bootstrap = () => ({ type: BOOTSTRAP });

export const updateResponseAction = action => ({
  type: ON_STOCK_DATA_RECIEVED,
  payload: action
});
