import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/modules/actions';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
