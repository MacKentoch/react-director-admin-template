import React, { PropTypes } from 'react';

const Button = ({toggleSideMenu}) => {
  return (
    <a
      href="#"
      onClick={toggleSideMenu}
      className="navbar-btn sidebar-toggle"
      data-toggle="offcanvas"
      role="button">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </a>
  );
};

Button.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired
};

export default Button;
