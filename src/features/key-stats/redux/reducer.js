import { UPDATE_KEY_STATS, RESET } from "../../../store/constants";

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
