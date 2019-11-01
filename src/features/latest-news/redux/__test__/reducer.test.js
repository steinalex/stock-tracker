import { UPDATE_LATEST_NEWS } from "../constants";
import { latestNewsReducer } from "../reducer";

describe("with an UPDATE_LATEST_NEWS action", () => {
  let newState;

  beforeAll(() => {
    const initialState = {
      selectedLatestNews: null
    };
    const action = { type: UPDATE_LATEST_NEWS, payload: "NEWS" };
    newState = latestNewsReducer(initialState, action);
  });

  it('it updates the latest news to "NEWS"', () => {
    expect(newState.selectedLatestNews).toBe("NEWS");
  });
});
