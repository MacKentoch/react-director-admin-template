// @flow weak

import React, {
  PureComponent
}                       from 'react';
import PropTypes        from 'prop-types';
import {
  Route,
  Redirect,
  withRouter
}                       from 'react-router-dom';
import auth             from '../../services/auth';

class LogoutRoute extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  componentDidMount() {
    auth.clearAllAppStorage();
  }

  render() {
    return (
      <Route { ...this.props }>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }
}

export default withRouter(LogoutRoute);
