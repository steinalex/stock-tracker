import { UPDATE_TOP_PEERS } from "../constants";
import { peerReducer, TopPeersState } from "../reducer";
import { UpdateTopPeersAction } from "../actions";

describe("with an UPDATE_TOP_PEERS action", () => {
  let newState: TopPeersState;

  beforeAll(() => {
    const initialState: TopPeersState = {
      selectedTopPeers: null
    };
    const action: UpdateTopPeersAction = {
      type: UPDATE_TOP_PEERS,
      payload: [{ name: "Apple", symbol: "AAPL" }]
    };
    newState = peerReducer(initialState, action);
  });

  it("it updates top peers to a peer of Apple with a symbol", () => {
    expect(newState.selectedTopPeers).toEqual([
      { name: "Apple", symbol: "AAPL" }
    ]);
  });
});
