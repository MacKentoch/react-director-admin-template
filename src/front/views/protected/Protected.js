// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterProtected: () => any,
    leaveProtected: () => any,
  },
} & RouterProps;

function Protected({ actions: { enterProtected, leaveProtected } }: Props) {
  useEffect(() => {
    enterProtected();

    return () => {
      leaveProtected();
    };
  }, []);

  return (
    <AnimatedView>
      <h1>Protected view</h1>
      <h3>If you can read, it means you are authenticated</h3>
    </AnimatedView>
  );
}

Protected.displayName = 'Protected';

Protected.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  currentView: PropTypes.string.isRequired,

  actions: PropTypes.shape({
    enterProtected: PropTypes.func.isRequired,
    leaveProtected: PropTypes.func.isRequired,
  }),
};

export default Protected;
