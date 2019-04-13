// @flow

export type PromiseAction<Action> = Promise<Action>;

export type ThunkAction<Action, State> = (
  dispatch: Dispatch<Action>,
  getState: GetState<State>,
) => any;

export type Dispatch<Action> = (
  action: Action | ThunkAction<Action> | PromiseAction<Action>,
) => any;

export type GetState<State> = () => { ...any } & State;
