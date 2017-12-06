// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/modules/actions';
import SimpleTables           from './SimpleTables';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterSimpleTables: actions.enterSimpleTables,
        leaveSimpleTables: actions.leaveSimpleTables
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTables);
