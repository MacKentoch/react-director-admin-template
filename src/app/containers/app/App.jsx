'use strict';

import React, { PropTypes, Component } from 'react';
import NavigationBar          from '../../components/navigation/NavigationBar.jsx';
import navigationModel        from '../../models/navigation.model.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel : navigationModel
    };
  }

  handleLeftNavItemClick(event, viewName) {
    // something to do here?
  }

  handleRightNavItemClick(event, viewName) {
    // something to do here?
  }

  render() {
    return (
      <div>
        <NavigationBar
          brand={this.state.navModel.brand}
          navModel={this.state.navModel}
          handleLeftNavItemClick={
            (ev, view) => this.handleLeftNavItemClick(ev, view)
          }
          handleRightNavItemClick={
            (ev, view) => this.handleRightNavItemClick(ev, view)
          }
        />
      <h1>
      </h1>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}


// statics :
App.propTypes = {
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
