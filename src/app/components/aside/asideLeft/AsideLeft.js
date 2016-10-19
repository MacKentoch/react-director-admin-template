/* eslint no-console: 0 */
import React, { PropTypes } from 'react';
import cx         from 'classnames';
import { Link }   from 'react-router';
import UserPanel  from './userPanel/UserPanel';
import SearchForm from './searchForm/SearchForm';

const AsideLeft = (props) => {
  const {
    connectionStatus,
    userIsConnected,
    username,
    helloWord,
    userPicture,
    showPicture
  } = props;

  const {
    isAnimated,
    isCollapsed,
    currentView
  } = props;

  return (
    <aside className={
      cx({
        'left-side': true,
        'aside-left--fixed': true,
        'sidebar-offcanvas': true,
        'sidebar-animated': isAnimated,
        'collapse-left':    isCollapsed
      })}>
        <section className="sidebar">
          <UserPanel
            hello={helloWord}
            username={username}
            connectionStatus={connectionStatus}
            online={userIsConnected}
            userPicture={userPicture}
            showUserPicture={showPicture}
          />

          <SearchForm
            onSearchSubmit={(value) => console.log('searching: ', value)}
          />

          <ul className="sidebar-menu">
            <li className={currentView === 'Home' ? 'active' : '' }>
              <Link to="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={currentView === 'General' ? 'active' : '' }>
              <Link
                to="/general">
                <i className="fa fa-gavel"></i>
                <span>General</span>
              </Link>
            </li>
            <li className={currentView === 'BasicElements' ? 'active' : '' }>
              <Link
                to="/basicElements">
                <i className="fa fa-globe"></i>
                <span>Basic Elements</span>
              </Link>
            </li>
            <li className={currentView === 'SimpleTables' ? 'active' : '' }>
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
  currentView: PropTypes.string,
  connectionStatus: PropTypes.shape({
    online: PropTypes.string,
    disconnected: PropTypes.string
  }),
  userIsConnected: PropTypes.bool,
  username: PropTypes.string,
  userPicture: PropTypes.string,
  showPicture: PropTypes.bool,
  helloWord: PropTypes.string
};

AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false
};

export default AsideLeft;
