import { UPDATE_LATEST_NEWS } from "../constants";
import { latestNewsReducer, LatestNewsState } from "../reducer";
import { UpdateLatestNewsAction } from "../actions";

describe("with an UPDATE_LATEST_NEWS action", () => {
  let newState: LatestNewsState;

  beforeAll(() => {
    const initialState: LatestNewsState = {
      selectedLatestNews: null
    };
    const action: UpdateLatestNewsAction = {
      type: UPDATE_LATEST_NEWS,
      payload: [
        {
          headline: "Apple creates generic product",
          source: "FT",
          date: "2019-11-19",
          url: "www.ft.com"
        }
      ]
    };
    newState = latestNewsReducer(initialState, action);
  });

  it('it updates the latest news to Apple news"', () => {
    expect(newState.selectedLatestNews).toEqual([
      {
        headline: "Apple creates generic product",
        source: "FT",
        date: "2019-11-19",
        url: "www.ft.com"
      }
    ]);
  });
});
