import { RESET } from "store/constants";
import { UPDATE_TOP_PEERS } from "./constants";
import { IPeers, TopPeersActions } from "./actions";
import { Reducer } from "redux";

export interface TopPeersState {
  selectedTopPeers: IPeers[] | null;
}

const initialState: TopPeersState = {
  selectedTopPeers: null
};

export const peerReducer: Reducer<Readonly<TopPeersState>, TopPeersActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_TOP_PEERS:
      return {
        ...state,
        selectedTopPeers: action.payload
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
