import { UPDATE_TOP_PEERS } from "../constants";
import { peerReducer } from "../reducer";

describe("with an UPDATE_TOP_PEERS action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      selectedTopPeers: null
    };
    const action = { type: UPDATE_TOP_PEERS, payload: "Peers" };
    newState = peerReducer(initialState, action);
  });

  it('it updates top peers to "Peers"', () => {
    expect(newState.selectedTopPeers).toEqual("Peers");
  });
});
