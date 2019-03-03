// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedView/AnimatedView';

class Protected extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views:
    currentView:      PropTypes.string.isRequired,
    enterProtected:   PropTypes.func.isRequired,
    leaveProtected:   PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterProtected } = this.props;
    enterProtected();
  }

  componentWillUnmount() {
    const { leaveProtected } = this.props;
    leaveProtected();
  }

  render() {
    return(
      <AnimatedView>
        <h1>
          Protected view
        </h1>
        <h3>
          If you can read, it means you are authenticated
        </h3>
      </AnimatedView>
    );
  }
}

export default Protected;
