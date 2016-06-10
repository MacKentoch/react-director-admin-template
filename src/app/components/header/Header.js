'use strict';

import React from 'react';

const Header = () => {
  return (
    <header
      className="header">
      <a href="#"
        className="logo">
        Director
      </a>
      <nav
        className="navbar navbar-static-top"
        role="navigation">
        <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </a>

        <div className="navbar-right">
          <ul className="nav navbar-nav">
            {/*<!-- Messages: style can be found in dropdown.less-->*/}
            <li className="dropdown messages-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope"></i>
                <span className="label label-success">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 4 messages</li>
                <li>
                  {/*<!-- inner menu: contains the actual data -->*/}
                  <ul className="menu">
                        <li>
                          {/*<!-- start message -->*/}
                          <a href="#">
                            <div className="pull-left">
                                <img src="img/26115.jpg" className="img-circle" alt="User Image"/>
                            </div>
                            <h4>
                                Support Team
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                            <small className="pull-right"><i className="fa fa-clock-o"></i> 5 mins</small>
                          </a>
                        </li>
                        {/*<!-- end message -->*/}
                        <li>
                            <a href="#">
                                <div className="pull-left">
                                    <img src="img/26115.jpg" className="img-circle" alt="user image"/>
                                </div>
                                <h4>
                                    Director Design Team

                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                                <small className="pull-right"><i className="fa fa-clock-o"></i> 2 hours</small>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pull-left">
                                    <img src="img/avatar.png" className="img-circle" alt="user image"/>
                                </div>
                                <h4>
                                    Developers

                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                                <small className="pull-right"><i className="fa fa-clock-o"></i> Today</small>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pull-left">
                                    <img src="img/26115.jpg" className="img-circle" alt="user image"/>
                                </div>
                                <h4>
                                    Sales Department

                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                                <small className="pull-right"><i className="fa fa-clock-o"></i> Yesterday</small>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="pull-left">
                                    <img src="img/avatar.png" className="img-circle" alt="user image"/>
                                </div>
                                <h4>
                                    Reviewers

                                </h4>
                                <p>Why not buy a new awesome theme?</p>
                                <small className="pull-right"><i className="fa fa-clock-o"></i> 2 days</small>
                            </a>
                        </li>
                  </ul>
                </li>
                <li className="footer"><a href="#">See All Messages</a></li>
              </ul>
            </li>
            <li className="dropdown tasks-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-tasks"></i>
                <span className="label label-danger">9</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 9 tasks</li>
                <li>
                    {/*<!-- inner menu: contains the actual data -->*/}
                  <ul className="menu">
                      <li>
                        {/*<!-- Task item -->*/}
                          <a href="#">
                              <h3>
                                  Design some buttons
                                  <small className="pull-right">20%</small>
                              </h3>
                              <div className="progress progress-striped xs">
                                  <div className="progress-bar progress-bar-success" style={{width: '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">20% Complete</span>
                                  </div>
                              </div>
                          </a>
                      </li>
                      {/*<!-- end task item -->*/}
                      <li>
                        {/*<!-- Task item -->*/}
                          <a href="#">
                              <h3>
                                  Create a nice theme
                                  <small className="pull-right">40%</small>
                              </h3>
                              <div className="progress progress-striped xs">
                                  <div className="progress-bar progress-bar-danger" style={{width: '40%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">40% Complete</span>
                                  </div>
                              </div>
                          </a>
                      </li>
                      {/*<!-- end task item -->*/}
                      <li>
                        {/*<!-- Task item -->*/}
                          <a href="#">
                              <h3>
                                  Some task I need to do
                                  <small className="pull-right">60%</small>
                              </h3>
                              <div className="progress progress-striped xs">
                                  <div className="progress-bar progress-bar-info" style={{width: '60%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">60% Complete</span>
                                  </div>
                              </div>
                          </a>
                      </li>
                      {/*<!-- end task item -->*/}
                      <li>
                        {/*<!-- Task item -->*/}
                          <a href="#">
                              <h3>
                                  Make beautiful transitions
                                  <small className="pull-right">80%</small>
                              </h3>
                              <div className="progress progress-striped xs">
                                  <div className="progress-bar progress-bar-warning" style={{width: '80%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">80% Complete</span>
                                  </div>
                              </div>
                          </a>
                      </li>
                      {/*<!-- end task item -->*/}
                  </ul>
                </li>
              <li className="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          {/*<!-- User Account: style can be found in dropdown.less -->*/}
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-user"></i>
              <span>Jane Doe <i className="caret"></i></span>
            </a>
            <ul className="dropdown-menu dropdown-custom dropdown-menu-right">
              <li className="dropdown-header text-center">Account</li>
              <li>
                <a href="#">
                <i className="fa fa-clock-o fa-fw pull-right"></i>
                    <span className="badge badge-success pull-right">10</span> Updates</a>
                <a href="#">
                <i className="fa fa-envelope-o fa-fw pull-right"></i>
                    <span className="badge badge-danger pull-right">5</span> Messages</a>
                <a href="#"><i className="fa fa-magnet fa-fw pull-right"></i>
                    <span className="badge badge-info pull-right">3</span> Subscriptions</a>
                <a href="#"><i className="fa fa-question fa-fw pull-right"></i> <span className="badge pull-right">11</span> FAQ</a>
              </li>
              <li className="divider"></li>
                <li>
                  <a href="#">
                  <i className="fa fa-user fa-fw pull-right"></i>
                      Profile
                  </a>
                  <a data-toggle="modal" href="#modal-user-settings">
                  <i className="fa fa-cog fa-fw pull-right"></i>
                    Settings
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#"><i className="fa fa-ban fa-fw pull-right"></i> Logout</a>
                </li>
                </ul>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Header;
