// @flow

/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import UserPanel from './userPanel/UserPanel';
import SearchForm from './searchForm/SearchForm';
import Horloge from '../../horloge/Horloge';
import Menu from './menu/Menu';

type MenuItem = {
  name: string,
  linkTo: string,
  faIconName: string,
  itemCount?: number,
};

type SideMenuItem = {
  id: string | number,
  group: string,
  menus: Array<MenuItem>,
};

type ConnectionStatus = {
  online: string,
  disconnected: string,
};

type Props = {
  isAnimated: boolean,
  isCollapsed: boolean,
  sideMenu: Array<SideMenuItem>,
  currentView: string,
  connectionStatus: ConnectionStatus,
  userIsConnected: boolean,
  username: string,
  userPicture: any,
  showPicture: boolean,
  helloWord: string,
};

const AsideLeft = ({
  connectionStatus,
  userIsConnected,
  username,
  helloWord,
  userPicture,
  showPicture,
  isAnimated,
  isCollapsed,
  currentView,
  sideMenu,
}: Props) => (
  <aside
    className={cx({
      'no-print': true,
      'left-side': true,
      'aside-left--fixed': true,
      'sidebar-offcanvas': true,
      'sidebar-animated': isAnimated,
      'collapse-left': isCollapsed,
    })}
    // add overflow to left sidebar:
    style={{
      height: '100%',
      overflow: 'auto',
      position: 'fixed',
    }}
  >
    <section className="sidebar">
      <UserPanel
        hello={helloWord}
        username={username}
        connectionStatus={connectionStatus}
        online={userIsConnected}
        userPicture={userPicture}
        showUserPicture={showPicture}
      />
      <Horloge />

      <SearchForm onSearchSubmit={value => console.log('searching: ', value)} />
      {sideMenu.map(({ id, group, menus }, menuIdx) => {
        return (
          <Menu
            key={menuIdx}
            initialCollapseState={menuIdx === 0}
            headerTitle={group}
            headerBackColor="#283744"
            activeView={currentView}
            views={menus}
            id={id}
          />
        );
      })}
    </section>
  </aside>
);

AsideLeft.displayName = 'AsideLeft';

AsideLeft.propTypes = {
  isAnimated: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  sideMenu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      group: PropTypes.string.isRequired,
      menus: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          linkTo: PropTypes.string.isRequired,
          faIconName: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  currentView: PropTypes.string,
  connectionStatus: PropTypes.shape({
    online: PropTypes.string,
    disconnected: PropTypes.string,
  }),
  userIsConnected: PropTypes.bool,
  username: PropTypes.string,
  userPicture: PropTypes.any,
  showPicture: PropTypes.bool,
  helloWord: PropTypes.string,
};

AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false,
};

export default AsideLeft;
