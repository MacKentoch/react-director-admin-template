// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  toggleSideMenu: (event?: SyntheticEvent<>) => any,
};

const Button = ({ toggleSideMenu }: Props) => (
  <a
    href="#"
    onClick={toggleSideMenu}
    className="navbar-btn sidebar-toggle"
    data-toggle="offcanvas"
    role="button"
  >
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </a>
);

Button.displayName = 'Button';

Button.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
};

export default Button;
