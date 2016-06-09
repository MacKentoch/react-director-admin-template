'use strict';

import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/actions';

const ViewsContainer = (Component) => {
  class ViewsContainerComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      currentView:  state.views
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions : bindActionCreators(
        {
          ...viewsActions
        },
        dispatch)
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewsContainerComponent);
};

export default ViewsContainer;
