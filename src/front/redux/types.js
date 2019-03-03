// @flow

/* eslint no-use-before-define:0 */

export type Action = {
  type: string
};

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;


