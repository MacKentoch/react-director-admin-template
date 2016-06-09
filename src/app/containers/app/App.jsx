'use strict';

import React                  from 'react';
import NavigationBar          from '../../components/navigation/NavigationBar.jsx';
import navigationModel        from '../../models/navigation.model.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/actions';

class App extends React.Component {
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
  children:   React.PropTypes.node,
  history:    React.PropTypes.object,
  location:   React.PropTypes.object,
  actions:    React.PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    currentView:  state
  };
};

// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
