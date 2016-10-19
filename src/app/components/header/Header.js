import React, { PropTypes } from 'react';
import UserMenu from './userMenu/UserMenu';
import TaskMenu from './taskMenu/TaskMenu';
import MessageMenu from './messageMenu/MessageMenu';

const Header = (props) => {
  const {
    userLogin,
    userFirstname,
    userLastname,
    userPicture,
    showPicture,

    appName,
    toggleSideMenu
  } = props;

  return (
    <header
      className="header fixed--header">
      <a href="#"
        className="logo">
        { appName }
      </a>
      <nav
        className="navbar navbar-static-top"
        role="navigation">
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
            />
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  appName: PropTypes.string,

  userLogin: PropTypes.string,
  userFirstname: PropTypes.string,
  userLastname: PropTypes.string,
  userPicture: PropTypes.string,
  showPicture: PropTypes.bool,

  currentView: PropTypes.string,
  toggleSideMenu: PropTypes.func
};

Header.defaultProps = {
  appName: 'applicationName'
};

export default Header;
