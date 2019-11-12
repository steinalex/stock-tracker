import { UPDATE_LATEST_NEWS } from "./constants";
import { ActionWithPayload } from "../../../utils/actions";
import { ResetAction } from "../../../store/constants";

export type UpdateLatestNewsAction = ActionWithPayload<
  typeof UPDATE_LATEST_NEWS,
  ILatestNews[]
>;

export interface ILatestNews {
  headline: string;
  source: string;
  date: string;
  url: string;
}

export const updateLatestNewsAction = (
  latestNews: ILatestNews[]
): UpdateLatestNewsAction => ({
  type: UPDATE_LATEST_NEWS,
  payload: latestNews
});

export type LatestNewsActions = UpdateLatestNewsAction | ResetAction;
