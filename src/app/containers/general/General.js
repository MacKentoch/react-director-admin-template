import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import { General }            from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterGeneral: actions.enterGeneral,
        leaveGeneral: actions.leaveGeneral
      },
      dispatch)
  };
};

const GeneralConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(General);

export default GeneralConnected;
