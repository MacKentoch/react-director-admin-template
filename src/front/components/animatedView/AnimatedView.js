// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withRouter } from 'react-router-dom';

type Props = {
  children: any,
  animated: boolean,
};

function AnimatedView({ animated = true, children }: Props) {
  return (
    <section
      className={cx({
        content: true,
        'view-enter': animated,
      })}
    >
      {children}
    </section>
  );
}

AnimatedView.displayName = 'AnimatedView';

AnimatedView.propTypes = {
  children: PropTypes.node,
  animated: PropTypes.bool,
};

export default withRouter(AnimatedView);
