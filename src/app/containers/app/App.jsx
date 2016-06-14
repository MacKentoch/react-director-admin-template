'use strict';

import React, {
  PropTypes,
  Component
}                             from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import {
  Header,
  Footer,
  AsideLeft,
  AsideRight
}                             from '../../components';
import { Modals }             from '../../views';
import { appConfig }          from '../../config';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appName: appConfig.APP_NAME
    };
  }

  render() {
    const { appName } = this.state;
    return (
      <div>
        <Header
          appName={appName}
          currentView={this.props.currentView}
          toggleSideMenu={(e)=>this.handlesMenuButtonClick(e)}
        />
        <div className="wrapper row-offcanvas row-offcanvas-left">
          <AsideLeft
            isAnimated={true}
            currentView={this.props.currentView}
            isCollapsed={this.props.sideMenuIsCollapsed}
          />
          <AsideRight
            isAnimated={true}
            isExpanded={this.props.sideMenuIsCollapsed}>
            <div>
              { this.props.children }
            </div>
          </AsideRight>
        </div>
        <Footer />
        {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
        <Modals />
      </div>
    );
  }

  handlesMenuButtonClick(event) {
    event.preventDefault();
    this.props.actions.toggleSideMenu();
  }
}

App.propTypes = {
  dispatch:   PropTypes.func,
  children:   PropTypes.node.isRequired,
  history:    PropTypes.object,
  location:   PropTypes.object,

  sideMenuIsCollapsed: PropTypes.bool,
  currentView: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchEarningGraphDataIfNeeded: PropTypes.func,
    openSideMenu:   PropTypes.func,
    closeSideMenu:  PropTypes.func,
    toggleSideMenu: PropTypes.func
  })
};

const mapStateToProps = (state) => {
  return {
    currentView:      state.views.currentView,
    sideMenuIsCollapsed: state.sideMenu.isCollapsed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {...actions},
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
