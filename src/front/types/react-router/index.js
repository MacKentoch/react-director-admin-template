// @flow

// #region imports
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
// #endregion

export type RouterProps = {
  match: Match,
  location: Location,
  history: RouterHistory,
};
