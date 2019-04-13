// @flow

// #region imports
import { type EarningGraphDataset } from '../../../earningGraph';
// #endregion

export type State = {
  isFetching: boolean,
  labels: Array<string>,
  datasets: Array<EarningGraphDataset>,
};

export type EarningGraphActions = {};
// #endregion
