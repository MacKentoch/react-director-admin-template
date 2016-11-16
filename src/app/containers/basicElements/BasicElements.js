import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/modules/actions';
import { BasicElements }       from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterBasicElements: actions.enterBasicElements,
        leaveBasicElements: actions.leaveBasicElements
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicElements);
