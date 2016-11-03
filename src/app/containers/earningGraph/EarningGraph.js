import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/modules/actions';
import { EarningGraph }       from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterEarningGraph: actions.enterEarningGraph,
        leaveEarningGraph: actions.leaveEarningGraph
      },
      dispatch)
  };
};

const EarningGraphConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(EarningGraph);

export default EarningGraphConnected;
