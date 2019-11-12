import { UPDATE_KEY_STATS } from "./constants";
import { ActionWithPayload } from "utils/actions";
import { ResetAction } from "store/constants";

export type UpdateKeyStatsAction = ActionWithPayload<
  typeof UPDATE_KEY_STATS,
  IKeyStats
>;

export interface IKeyStats {
  companyName: string;
  symbol: string;
  currency: string;
  primaryExchange: string;
  open: number;
  high: number;
  low: number;
  previousClose: number;
  previousVolume: number;
  avgTotalVolume: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  isUSMarketOpen: string;
  eps: number;
}

export const updateKeyStatsAction = (keyStats: IKeyStats) => ({
  type: UPDATE_KEY_STATS,
  payload: keyStats
});

export type KeyStatsActions = UpdateKeyStatsAction | ResetAction;
