'use strict';

import React from 'react';
import TeamMember from './teamMember/TeamMember';

const TeamMates = () => {
  return (
    <div className="panel">
      <header className="panel-heading">
        Teammates
      </header>
      <ul className="list-group teammates">

        <li className="list-group-item">
          <a href="">
            <img
              src={require('../../vendors/img/26115.jpg')}
              width="50"
              height="50"
              />
          </a>
          <span className="pull-right label label-danger inline m-t-15">
            Admin
          </span>
          <a href="">
            Damon Parker
          </a>
        </li>

        <li className="list-group-item">
          <a href="">
            <img
              src={require('../../vendors/img/26115.jpg')}
              width="50"
              height="50"
            />
          </a>
          <span className="pull-right label label-info inline m-t-15">
            Member
          </span>
          <a href="">
            Joe Waston
          </a>
        </li>

        <li className="list-group-item">
          <a href="">
            <img
              src={require('../../vendors/img/26115.jpg')}
              width="50"
              height="50"
            />
          </a>
          <span className="pull-right label label-warning inline m-t-15">
            Editor
          </span>
          <a href="">
            Jannie Dvis
          </a>
        </li>

        <li className="list-group-item">
          <a href="">
            <img
              src={require('../../vendors/img/26115.jpg')}
              width="50"
              height="50"
            />
          </a>
          <span className="pull-right label label-warning inline m-t-15">
            Editor
          </span>
          <a href="">
            Emma Welson
          </a>
        </li>

        <li className="list-group-item">
          <a href="">
            <img
              src={require('../../vendors/img/26115.jpg')}
              width="50"
              height="50"
            />
          </a>
          <span className="pull-right label label-success inline m-t-15">
            Subscriber
          </span>
          <a href="">
            Emma Welson
          </a>
        </li>

      </ul>
      <div className="panel-footer bg-white">
        {/* <!-- <span className="pull-right badge badge-info">32</span> --> */}
        <button className="btn btn-primary btn-addon btn-sm">
          <i className="fa fa-plus"></i>
          Add Teammate
        </button>
      </div>
    </div>
  );
};

export default TeamMates;
