// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const UserMenu = ({
  firstname,
  lastname,
  onLogout
}) => (
  <li className="dropdown user user-menu">
    <a
      href="#"
      className="dropdown-toggle"
      data-toggle="dropdown">
      <i className="fa fa-user" />
      <span>
        { firstname } { lastname }
        <i className="caret" />
      </span>
    </a>
    <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
      <li className="dropdown-header text-center">
        Account
      </li>
      <li>
        <a href="#">
          <i className="fa fa-clock-o fa-fw pull-right" />
          <span className="badge badge-success pull-right">
            10
          </span>
          Updates
        </a>
        <a href="#">
          <i className="fa fa-envelope-o fa-fw pull-right" />
          <span className="badge badge-danger pull-right">
            5
          </span>
          Messages
        </a>
        <a href="#">
          <i className="fa fa-magnet fa-fw pull-right" />
          <span className="badge badge-info pull-right">
            3
          </span>
          Subscriptions
        </a>
        <a href="#">
          <i className="fa fa-question fa-fw pull-right" />
          <span className="badge pull-right">
            11
          </span>
          FAQ
        </a>
      </li>
      <li className="divider" />
      <li>
        <a href="#">
          <i className="fa fa-user fa-fw pull-right" />
          Profile
        </a>
        <a
          data-toggle="modal"
          href="#modal-user-settings">
          <i className="fa fa-cog fa-fw pull-right" />
          Settings
        </a>
      </li>
      <li className="divider" />
      <li>
        <a onClick={onLogout}>
          <i className="fa fa-ban fa-fw pull-right" />
            Logout
        </a>
      </li>
    </ul>
  </li>
);

UserMenu.propTypes = {
  login:      PropTypes.string,
  firstname:  PropTypes.string,
  lastname:   PropTypes.string,
  picture:    PropTypes.string,
  onLogout:   PropTypes.func
};

UserMenu.defaultProps = {
  onLogout: () => {}
};

UserMenu.displayName = 'UserMenu';

export default UserMenu;
