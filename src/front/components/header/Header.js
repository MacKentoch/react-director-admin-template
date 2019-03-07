// @flow

import React from 'react';
import PropTypes from 'prop-types';
import UserMenu from './userMenu/UserMenu';
import TaskMenu from './taskMenu/TaskMenu';
import MessageMenu from './messageMenu/MessageMenu';
import Button from './button/Button';

type Props = {
  userLogin: string,
  userFirstname: string,
  userLastname: string,
  userPicture: string | any,
  showPicture: boolean,
  appName: string,
  toggleSideMenu: () => any,
  onLogout: () => any,
};

const Header = ({
  userLogin,
  userFirstname,
  userLastname,
  userPicture,
  showPicture,
  appName,
  toggleSideMenu,
  onLogout,
}: Props) => (
  <header className="header fixed--header">
    <a href="#" className="logo">
      {appName}
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <Button toggleSideMenu={toggleSideMenu} />
      <div className="navbar-right">
        <ul className="nav navbar-nav">
          <MessageMenu />
          <TaskMenu />
          <UserMenu
            login={userLogin}
            firstname={userFirstname}
            lastname={userLastname}
            picture={userPicture}
            showUserPicture={showPicture}
            onLogout={onLogout}
          />
        </ul>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  appName: PropTypes.string,

  userLogin: PropTypes.string,
  userFirstname: PropTypes.string,
  userLastname: PropTypes.string,
  userPicture: PropTypes.string,
  showPicture: PropTypes.bool,
  onLogout: PropTypes.func,

  currentView: PropTypes.string,
  toggleSideMenu: PropTypes.func,
};

Header.defaultProps = {
  appName: 'applicationName',
};

Header.displayName = 'Header';

export default Header;
