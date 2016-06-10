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
        <Header />
        <div className="wrapper row-offcanvas row-offcanvas-left">
          <AsideLeft />
          <AsideRight>
            { this.props.children }
          </AsideRight>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch:   PropTypes.func,
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    currentView: state.views.currentView
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
