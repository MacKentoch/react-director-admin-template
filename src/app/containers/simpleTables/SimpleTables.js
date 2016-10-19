import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import { SimpleTables }       from '../../views';

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

const SimpleTablesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTables);

export default SimpleTablesConnected;
