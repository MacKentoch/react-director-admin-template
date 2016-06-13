'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const AsideRight = (props) => {
  const asideRightClasses = classNames({
    'right-side': true,
    'right-side--top-margin': true,
    'strech': props.isExpanded
  });
  return (
    <aside className={asideRightClasses}>
      { props.children }
    </aside>
  );
};

AsideRight.propTypes = {
  children: PropTypes.node.isRequired,
  isAnimated: PropTypes.bool,
  isExpanded: PropTypes.bool
};

AsideRight.defaultProps = {
  isAnimated: false,
  isExpanded: false
};

export default AsideRight;
