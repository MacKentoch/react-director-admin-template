'use strict';

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import { Home }               from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    earningGraphIsFetching: state.earningGraph.isFetching,
    earningGraphLabels:     state.earningGraph.labels,
    earningGraphDatasets:   state.earningGraph.datasets
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterHome: actions.enterHome,
        leaveHome: actions.leaveHome,
        fetchEarningGraphDataIfNeeded: actions.fetchEarningGraphDataIfNeeded
      },
      dispatch)
  };
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeConnected;
