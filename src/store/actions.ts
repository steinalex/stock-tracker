import { BOOTSTRAP } from "./constants";

export const bootstrap = () => ({ type: BOOTSTRAP });
export type BootstrapAction = {
  type: typeof BOOTSTRAP;
};
