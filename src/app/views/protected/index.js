// @flow

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import Protected              from './Protected';


const mapStateToProps = (state) => {
  return {
    // views
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views
      enterProtected: viewsActions.enterProtected,
      leaveProtected: viewsActions.leaveProtected
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Protected);
