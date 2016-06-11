'use strict';
/* eslint no-console: 0 */
import React      from 'react';
import UserPanel  from './userPanel/UserPanel';
import SearchForm from './searchForm/SearchForm';

const AsideLeft = () => {
  return (
    <aside className="left-side sidebar-offcanvas">
        <section className="sidebar">
          <UserPanel />

          <SearchForm
            onSearchSubmit={(value) => console.log('searching: ', value)}
          />

          <ul className="sidebar-menu">
            <li className="active">
              <a href="index.html">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="general.html">
                <i className="fa fa-gavel"></i>
                <span>General</span>
              </a>
            </li>
            <li>
              <a href="basic_form.html">
                <i className="fa fa-globe"></i>
                <span>Basic Elements</span>
              </a>
            </li>
            <li>
              <a href="simple.html">
                <i className="fa fa-glass"></i>
                <span>Simple tables</span>
              </a>
            </li>
          </ul>
        </section>

    </aside>

  );
};

export default AsideLeft;
