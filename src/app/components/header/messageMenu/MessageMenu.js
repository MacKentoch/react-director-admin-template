import React from 'react';

const MessageMenu = () => {
  return (
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
            <ul className="menu">
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img
                      src={require('../../../vendors/img/26115.jpg')}
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
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img
                      src={require('../../../vendors/img/26115.jpg')}
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
                      src={require('../../../vendors/img/avatar.png')}
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
                      src={require('../../../vendors/img/26115.jpg')}
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
                      src={require('../../../vendors/img/avatar.png')}
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
  );
};

export default MessageMenu;
