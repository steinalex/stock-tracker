import { RESET } from "../../../store/constants";
import { UPDATE_TOP_PEERS } from "./constants";

const initialState = { selectedTopPeers: null };
export const peerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_TOP_PEERS:
      return {
        ...state,
        selectedTopPeers: payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
