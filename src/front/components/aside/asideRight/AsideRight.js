// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  children: any,
  isAnimated: boolean,
  isExpanded: boolean,
};

const AsideRight = ({ children, isAnimated, isExpanded }: Props) => (
  <aside
    className={cx({
      'right-side': true,
      'right-side--top-margin': true,
      'aside-right-animated': isAnimated,
      strech: isExpanded,
    })}
  >
    {children}
  </aside>
);

AsideRight.displayName = 'AsideRight';

AsideRight.propTypes = {
  children: PropTypes.node.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

AsideRight.defaultProps = {
  isAnimated: true,
  isExpanded: false,
};

export default AsideRight;
