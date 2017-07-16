// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import cx         from 'classnames';


const AsideRight = ({
  children,
  isAnimated,
  isExpanded
}) => (
  <aside className={
    cx({
      'right-side':             true,
      'right-side--top-margin': true,
      'aside-right-animated':   isAnimated,
      'strech':                 isExpanded
    })}>
    { children }
  </aside>
);

AsideRight.propTypes = {
  children:   PropTypes.node.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired
};

AsideRight.defaultProps = {
  isAnimated: true,
  isExpanded: false
};

export default AsideRight;
