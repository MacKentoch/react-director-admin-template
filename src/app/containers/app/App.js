// @flow weak

// #region imports
import React, {
  Component
}                             from 'react';
import PropTypes              from 'prop-types';
import {
  Header,
  // Footer,
  AsideLeft,
  AsideRight
}                             from '../../components';
import { Modals }             from '../../views';
import { appConfig }          from '../../config';
import { navigation }         from '../../models';
import MainRoutes             from '../../routes/MainRoutes';
import auth                   from '../../services/auth';
import UserIMG                from '../../img/user.jpg';
// #endregion


class App extends Component {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    sideMenuIsCollapsed: PropTypes.bool,
    userInfos:  PropTypes.shape({
      login:       PropTypes.string,
      firstname:   PropTypes.string,
      lastname:    PropTypes.string,
      picture:     PropTypes.string,
      showPicture: PropTypes.bool
    }),
    userIsConnected: PropTypes.bool,
    currentView:     PropTypes.string,

    actions: PropTypes.shape({
      enterHome: PropTypes.func,
      leaveHome: PropTypes.func,
      fetchEarningGraphDataIfNeeded: PropTypes.func,
      fetchUserInfoDataIfNeeded:     PropTypes.func,
      openSideMenu:   PropTypes.func,
      closeSideMenu:  PropTypes.func,
      toggleSideMenu: PropTypes.func
    })
  };

  state = {
    appName:          appConfig.APP_NAME,
    connectionStatus: appConfig.CONNECTION_STATUS,
    helloWord:        appConfig.HELLO_WORD
  };

  // #region lifecycle methods
  componentDidMount() {
    const {
      actions: {
        fetchUserInfoDataIfNeeded,
        getSideMenuCollpasedStateFromLocalStorage
      }
    } = this.props;

    fetchUserInfoDataIfNeeded();
    getSideMenuCollpasedStateFromLocalStorage();
  }

  render() {
    const { appName, connectionStatus, helloWord } = this.state;
    const { userInfos, userIsConnected } = this.props;
    const { sideMenuIsCollapsed, currentView } = this.props;

    const userFullName = `${userInfos.firstname} ${userInfos.lastname.toUpperCase()}`;
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
          toggleSideMenu={this.handlesMenuButtonClick}
          onLogout={this.handlesOnLogout}
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
          <AsideRight
            isAnimated={true}
            isExpanded={sideMenuIsCollapsed}>
            <MainRoutes />
          </AsideRight>
        </div>
        {/* <Footer /> */}
        {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
        <Modals />
      </div>
    );
  }
  // #endregion

  handlesMenuButtonClick = (event) => {
    if (event) {
      event.preventDefault();
    }
    const { actions: { toggleSideMenu } } = this.props;
    toggleSideMenu();
  }

  handlesOnLogout = (event: any) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    // clear all application storage
    auth.clearAllAppStorage();
    // redirect to login
    const { history } = this.props;
    history.push('/login');
  }
}

export default App;
