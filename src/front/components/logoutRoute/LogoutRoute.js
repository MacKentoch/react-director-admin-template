// @flow

import React, { useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import auth from '../../services/auth';

type Props = {
  match: Match,
  location: Location,
  history: RouterHistory,
  ...any,
};

function LogoutRoute(props: Props) {
  useEffect(() => {
    auth.clearAllAppStorage();
  }, []);

  return (
    <Route {...props}>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
}

export default withRouter(LogoutRoute);
