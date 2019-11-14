import { UPDATE_KEY_STATS } from "../constants";
import { keyStatsReducer, KeyStatsState } from "../reducer";
import { UpdateKeyStatsAction } from "../actions";

describe("with an UPDATE_KEY_STATS action", () => {
  let newState: KeyStatsState;

  beforeAll(() => {
    const initialState: KeyStatsState = {
      selectedKeyStats: null
    };
    const action: UpdateKeyStatsAction = {
      type: UPDATE_KEY_STATS,
      payload: {
        companyName: "Apple Inc.",
        symbol: "AAPL",
        currency: "USD",
        primaryExchange: "NAS",
        open: 2,
        high: 4,
        low: 1,
        previousClose: 2.55,
        previousVolume: 6.55,
        avgTotalVolume: 3.08,
        marketCap: 7,
        peRatio: 6.55,
        week52High: 10,
        week52Low: 10,
        ytdChange: 3,
        isUSMarketOpen: "true",
        eps: 5
      }
    };
    newState = keyStatsReducer(initialState, action);
  });

  it("it updates the key statistics to a list of information about Apple Inc.", () => {
    expect(newState.selectedKeyStats).toEqual({
      companyName: "Apple Inc.",
      symbol: "AAPL",
      currency: "USD",
      primaryExchange: "NAS",
      open: 2,
      high: 4,
      low: 1,
      previousClose: 2.55,
      previousVolume: 6.55,
      avgTotalVolume: 3.08,
      marketCap: 7,
      peRatio: 6.55,
      week52High: 10,
      week52Low: 10,
      ytdChange: 3,
      isUSMarketOpen: "true",
      eps: 5
    });
  });
});
