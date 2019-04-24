// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnimatedView from '../../components/animatedView/AnimatedView';

type Props = {
  actions: {
    enterPageNotFound: () => any,
    leavePageNotFound: () => any,
  },
};

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
  actions: PropTypes.shape({
    enterPageNotFound: PropTypes.func.isRequired,
    leavePageNotFound: PropTypes.func.isRequired,
  }),
};

export default PageNotFound;
