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
  AsideLeft,
  AsideRight
}                             from '../../components';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header
          toggleSideMenu={(e)=>this.handlesMenuButtonClick(e)}
        />
        <div className="wrapper row-offcanvas row-offcanvas-left">
          <AsideLeft
            isAnimated={true}
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
