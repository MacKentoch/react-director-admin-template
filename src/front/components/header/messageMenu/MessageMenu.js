// @flow

import React from 'react';
import DamonIMG from '../../../img/Damon.png';
import JoeIMG from '../../../img/Joe.png';
import EmmaIMG from '../../../img/Emma.png';
import JannieIMG from '../../../img/Jannie.png';
import EmmetIMG from '../../../img/Emmet.png';

const MessageMenu = () => (
  <li className="dropdown messages-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-envelope" />
      <span className="label label-success">4</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have 4 messages</li>
      <li>
        <ul className="menu">
          <li>
            <a href="#">
              <div className="pull-left">
                <img src={DamonIMG} className="img-circle" alt="User Image" />
              </div>
              <h4>Support Team</h4>
              <p>Why not buy a new awesome theme?</p>
              <small className="pull-right">
                <i className="fa fa-clock-o" />5 mins
              </small>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="pull-left">
                <img src={JoeIMG} className="img-circle" alt="user image" />
              </div>
              <h4>Director Design Team</h4>
              <p>Why not buy a new awesome theme?</p>
              <small className="pull-right">
                <i className="fa fa-clock-o" />2 hours
              </small>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="pull-left">
                <img src={EmmaIMG} className="img-circle" alt="user image" />
              </div>
              <h4>Developers</h4>
              <p>Why not buy a new awesome theme?</p>
              <small className="pull-right">
                <i className="fa fa-clock-o" />
                Today
              </small>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="pull-left">
                <img src={JannieIMG} className="img-circle" alt="user image" />
              </div>
              <h4>Sales Department</h4>
              <p>Why not buy a new awesome theme?</p>
              <small className="pull-right">
                <i className="fa fa-clock-o" />
                Yesterday
              </small>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="pull-left">
                <img src={EmmetIMG} className="img-circle" alt="user image" />
              </div>
              <h4>Reviewers</h4>
              <p>Why not buy a new awesome theme?</p>
              <small className="pull-right">
                <i className="fa fa-clock-o" />2 days
              </small>
            </a>
          </li>
        </ul>
      </li>
      <li className="footer">
        <a href="#">See All Messages</a>
      </li>
    </ul>
  </li>
);

MessageMenu.displayName = 'MessageMenu';

export default MessageMenu;
