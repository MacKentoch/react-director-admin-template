import React, { PropTypes } from 'react';
import classNames from 'classnames';


const AsideRight = (props) => {
  const asideRightClasses = classNames({
    'right-side': true,
    'right-side--top-margin': true,
    'aside-right-animated': props.isAnimated,
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
  isAnimated: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired
};

AsideRight.defaultProps = {
  isAnimated: true,
  isExpanded: false
};

export default AsideRight;
