export type Action<Type> = {
  type: Type;
};

export type ActionWithPayload<T, P> = Action<T> & {
  payload: P;
};

export interface ActionCreator<T extends string, P> {
  (...args: any[]): ActionWithPayload<T, P>;
}
