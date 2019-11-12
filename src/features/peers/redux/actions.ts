import { UPDATE_TOP_PEERS } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export interface IPeers {
  symbol: string;
  name: string;
}
export type UpdateTopPeersAction = ActionWithPayload<
  typeof UPDATE_TOP_PEERS,
  IPeers[]
>;

export const updateTopPeersAction = (
  topPeers: IPeers[]
): UpdateTopPeersAction => ({
  type: UPDATE_TOP_PEERS,
  payload: topPeers
});

export type TopPeersActions = UpdateTopPeersAction | ResetAction;
