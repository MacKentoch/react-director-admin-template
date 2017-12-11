// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
import * as userAuthActions   from '../../redux/modules/userAuth';
import Login                  from './Login';

const mapStateToProps = (state) => {
  return {
    // views:
    currentView:  state.views.currentView,

    // useAuth:
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching:      state.userAuth.isFetching,
    isLogging:       state.userAuth.isLogging

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...viewsActions,
      ...userAuthActions
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
