import { UPDATE_KEY_STATS } from "../constants";
import { keyStatsReducer } from "../reducer";

const createInitialState = { selectedKeyStats: "" };
describe("with an UPDATE_KEY_STATS action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      ...createInitialState,
      selectedKeyStats: ""
    };
    const action = { type: UPDATE_KEY_STATS, payload: "STATS" };
    newState = keyStatsReducer(initialState, action);
  });

  it('it updates the key statistics to "STATS"', () => {
    expect(newState.selectedKeyStats).toBe("STATS");
  });
});
