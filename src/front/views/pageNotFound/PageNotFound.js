// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterPageNotFound: () => any,
    leavePageNotFound: () => any,
  },
} & RouterProps;

function PageNotFound({
  actions: { enterPageNotFound, leavePageNotFound },
}: Props) {
  useEffect(() => {
    enterPageNotFound();
    return () => {
      leavePageNotFound();
    };
  }, []);

  return (
    <AnimatedView>
      <div className="row">
        <div className="col-md-12">
          <h2>
            <i className="fa fa-frown-o" aria-hidden="true" />
            &nbsp; Sorry... This page does not exist
          </h2>
        </div>
      </div>
    </AnimatedView>
  );
}

PageNotFound.displayName = 'PageNotFound';

PageNotFound.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  actions: PropTypes.shape({
    enterPageNotFound: PropTypes.func.isRequired,
    leavePageNotFound: PropTypes.func.isRequired,
  }),
};

export default PageNotFound;
