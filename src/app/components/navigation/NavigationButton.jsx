import React from 'react';

const NavigationButton = (props) => {
  return (
    <li>
      <a href={props.href}>
        {props.children}
      </a>
    </li>
  );
};

NavigationButton.propTypes = {
  children : React.PropTypes.node.isRequired,
  href     : React.PropTypes.string
};

NavigationButton.defaultProps  = {
  href  : '#'
};

export default NavigationButton;
