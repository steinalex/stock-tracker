import { Action } from "../utils/actions";

export const BOOTSTRAP = "BOOTSTRAP";

export const RESET = "RESET";
export type RESET = typeof RESET;
export type ResetAction = Action<RESET>;

export const UPDATE_SELECTED_STOCK = "UPDATE_SELECTED_STOCK";
