// @flow

import React from 'react';
import PropTypes from 'prop-types';
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

  component: any,
  path?: string,
};

function isAuthenticated() {
  const checkUserHasId = user => user && user.id;
  const user = auth.getUserInfo() ? auth.getUserInfo() : null;
  const authenticated = auth.getToken() && checkUserHasId(user);
  return authenticated;
}

function isExpired() {
  return auth.isExpiredToken(auth.getToken());
}

function PrivateRoute(props: Props) {
  const { component: InnerComponent, ...rest } = props;
  const { location } = props;

  const isUserAuthenticated = isAuthenticated();
  const isTokenExpired = isExpired();

  return (
    <Route
      {...rest}
      render={p =>
        !isTokenExpired && isUserAuthenticated ? (
          <InnerComponent {...p} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

PrivateRoute.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  component: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default withRouter(PrivateRoute);
