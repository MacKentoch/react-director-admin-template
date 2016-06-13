'use strict';
/* eslint no-console: 0 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link }   from 'react-router';
import UserPanel  from './userPanel/UserPanel';
import SearchForm from './searchForm/SearchForm';

const AsideLeft = (props) => {
  const sideMenuClasses = classNames({
    'left-side': true,
    'aside-left--fixed': true,
    'sidebar-offcanvas': true,
    'sidebar-animated': props.isAnimated,
    'collapse-left':    props.isCollapsed
  });
  return (
    <aside className={sideMenuClasses}>
        <section className="sidebar">
          <UserPanel />

          <SearchForm
            onSearchSubmit={(value) => console.log('searching: ', value)}
          />

          <ul className="sidebar-menu">
            <li className={props.currentView === 'Home' ? 'active' : '' }>
              <Link to="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={props.currentView === 'General' ? 'active' : '' }>
              <a href="general.html">
                <i className="fa fa-gavel"></i>
                <span>General</span>
              </a>
            </li>
            <li className={props.currentView === 'BasicElements' ? 'active' : '' }>
              <Link
                to="/basicElements">
                <i className="fa fa-globe"></i>
                <span>Basic Elements</span>
              </Link>
            </li>
            <li className={props.currentView === 'SimpleTables' ? 'active' : '' }>
              <Link
                to="/simpleTables">
                <i className="fa fa-glass"></i>
                <span>Simple tables</span>
              </Link>
            </li>
          </ul>
        </section>

    </aside>

  );
};

AsideLeft.propTypes = {
  isAnimated: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  currentView: PropTypes.string
};

AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false
};

export default AsideLeft;
