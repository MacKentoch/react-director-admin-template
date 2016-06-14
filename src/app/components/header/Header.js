'use strict';

import React, { PropTypes } from 'react';
import UserMenu from './userMenu/UserMenu';
import TaskMenu from './taskMenu/TaskMenu';


const Header = (props) => {
  const { userLogin, userFirstname, userLastname, userPicture } = props;
  return (
    <header
      className="header fixed--header">
      <a href="#"
        className="logo">
        { props.appName }
      </a>
      <nav
        className="navbar navbar-static-top"
        role="navigation">
        <a
          href="#"
          onClick={(e)=>props.toggleSideMenu(e)}
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

            <li className="dropdown messages-menu">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown">
                  <i className="fa fa-envelope"></i>
                  <span className="label label-success">
                    4
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">
                    You have 4 messages
                  </li>
                  <li>
                    {/* <!-- inner menu: contains the actual data --> */}
                    <ul className="menu">
                      <li>
                        {/* <!-- start message --> */}
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src={require('../../vendors/img/26115.jpg')}
                              className="img-circle"
                              alt="User Image"/>
                          </div>
                          <h4>
                              Support Team
                          </h4>
                          <p>
                            Why not buy a new awesome theme?
                          </p>
                          <small className="pull-right">
                            <i className="fa fa-clock-o"></i>
                              5 mins
                          </small>
                        </a>
                      </li>
                      {/* <!-- end message --> */}
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src={require('../../vendors/img/26115.jpg')}
                              className="img-circle"
                              alt="user image"
                            />
                          </div>
                          <h4>
                              Director Design Team
                          </h4>
                          <p>
                            Why not buy a new awesome theme?
                          </p>
                          <small className="pull-right">
                            <i className="fa fa-clock-o"></i>
                              2 hours
                          </small>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src={require('../../vendors/img/avatar.png')}
                              className="img-circle"
                              alt="user image"
                            />
                          </div>
                          <h4>
                              Developers
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                          <small className="pull-right">
                            <i className="fa fa-clock-o"></i>
                              Today
                          </small>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src={require('../../vendors/img/26115.jpg')}
                              className="img-circle"
                              alt="user image"
                            />
                          </div>
                          <h4>
                              Sales Department
                          </h4>
                          <p>
                            Why not buy a new awesome theme?
                          </p>
                          <small className="pull-right">
                            <i className="fa fa-clock-o"></i>
                              Yesterday
                          </small>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="pull-left">
                            <img
                              src={require('../../vendors/img/avatar.png')}
                              className="img-circle"
                              alt="user image"
                            />
                          </div>
                          <h4>
                              Reviewers
                          </h4>
                          <p>
                            Why not buy a new awesome theme?
                          </p>
                          <small className="pull-right">
                            <i className="fa fa-clock-o"></i>
                              2 days
                          </small>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">
                      See All Messages
                    </a>
                  </li>
                </ul>
            </li>

            <TaskMenu />

            <UserMenu
              login={userLogin}
              firstname={userFirstname}
              lastname={userLastname}
              picture={userPicture}
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

  currentView: PropTypes.string,
  toggleSideMenu: PropTypes.func
};

Header.defaultProps = {
  appName: 'applicationName'
};

export default Header;
