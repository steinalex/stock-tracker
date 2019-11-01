import { RESET } from "../../../store/constants";
import { UPDATE_KEY_STATS } from "./constants";

const initialState = { selectedKeyStats: "" };
export const keyStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_KEY_STATS:
      return {
        ...state,
        selectedKeyStats: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
