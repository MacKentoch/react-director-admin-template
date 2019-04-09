// @flow

// #region imports
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Header, AsideLeft, AsideRight } from '../../components';
import { Modals } from '../../views';
import { appConfig } from '../../config';
import { navigation } from '../../models';
import MainRoutes from '../../routes/MainRoutes';
import auth from '../../services/auth';
import UserIMG from '../../img/user.jpg';
// #endregion

type Props = any;

function App({
  history,
  userInfos,
  userIsConnected,
  sideMenuIsCollapsed,
  currentView,
  actions: {
    fetchUserInfoDataIfNeeded,
    getSideMenuCollpasedStateFromLocalStorage,
    toggleSideMenu,
  },
}: Props) {
  const [appName] = useState(appConfig.APP_NAME);
  const [connectionStatus] = useState(appConfig.CONNECTION_STATUS);
  const [helloWord] = useState(appConfig.HELLO_WORD);

  /* elsin-disable */
  useEffect(() => {
    fetchUserInfoDataIfNeeded();
    getSideMenuCollpasedStateFromLocalStorage();
  }, []);
  /* elsin-enable */

  const userFullName = `${
    userInfos.firstname
  } ${userInfos.lastname.toUpperCase()}`;

  const handlesMenuButtonClick = useCallback(
    (event?: SyntheticEvent<>) => {
      event && event.preventDefault();
      toggleSideMenu();
    },
    [toggleSideMenu],
  );

  const handlesOnLogout = useCallback(
    (event?: SyntheticEvent<>) => {
      event && event.preventDefault();
      event && event.stopPropagation();
      // clear all application storage
      auth.clearAllAppStorage();
      // redirect to login
      history.push('/login');
    },
    [history],
  );

  return (
    <div>
      <Header
        appName={appName}
        userLogin={userInfos.login}
        userFirstname={userInfos.firstname}
        userLastname={userInfos.lastname}
        userPicture={UserIMG}
        showPicture={userInfos.showPicture}
        currentView={currentView}
        toggleSideMenu={handlesMenuButtonClick}
        onLogout={handlesOnLogout}
      />
      <div className="wrapper row-offcanvas row-offcanvas-left">
        <AsideLeft
          isAnimated={true}
          sideMenu={navigation.sideMenu}
          currentView={currentView}
          isCollapsed={sideMenuIsCollapsed}
          helloWord={helloWord}
          connectionStatus={connectionStatus}
          userIsConnected={userIsConnected}
          username={userFullName}
          userPicture={userInfos.picture}
          showPicture={userInfos.showPicture}
        />
        <AsideRight isAnimated={true} isExpanded={sideMenuIsCollapsed}>
          <MainRoutes />
        </AsideRight>
      </div>
      {/* <Footer /> */}
      {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
      <Modals />
    </div>
  );
}

App.displayName = 'App';

App.defaultProps = {
  actions: {
    fetchUserInfoDataIfNeeded: () => {},
    getSideMenuCollpasedStateFromLocalStorage: () => {},
    toggleSideMenu: () => {},
  },
};

App.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  sideMenuIsCollapsed: PropTypes.bool,
  userInfos: PropTypes.shape({
    login: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    picture: PropTypes.string,
    showPicture: PropTypes.bool,
  }),
  userIsConnected: PropTypes.bool,
  currentView: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchEarningGraphDataIfNeeded: PropTypes.func,
    fetchUserInfoDataIfNeeded: PropTypes.func,
    openSideMenu: PropTypes.func,
    closeSideMenu: PropTypes.func,
    toggleSideMenu: PropTypes.func,
  }),
};

export default App;
