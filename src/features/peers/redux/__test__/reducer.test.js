import { UPDATE_TOP_PEERS } from "../constants";
import { peerReducer } from "../reducer";

const createInitialState = { selectedTopPeers: null };
describe("with an UPDATE_TOP_PEERS action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      ...createInitialState,
      selectedTopPeers: ""
    };
    const action = { type: UPDATE_TOP_PEERS, payload: "Peers" };
    newState = peerReducer(initialState, action);
  });

  it('it updates top peers to "Peers"', () => {
    expect(newState.selectedTopPeers).toEqual("Peers");
  });
});
