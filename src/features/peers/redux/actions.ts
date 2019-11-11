import { UPDATE_TOP_PEERS } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export type UpdateTopPeersAction = ActionWithPayload<UPDATE_TOP_PEERS, IPeers>;

export interface IPeers {
  symbol: string;
  name: string;
}

export const updateTopPeersAction = (
  topPeers: IPeers
): UpdateTopPeersAction => ({
  type: UPDATE_TOP_PEERS,
  payload: topPeers
});

export type TopPeersActions = UpdateTopPeersAction | ResetAction;
