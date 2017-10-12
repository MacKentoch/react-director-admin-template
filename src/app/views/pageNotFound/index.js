// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewActions       from '../../redux/modules/views';
import PageNotFound           from './PageNotFound';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        //  views
        ...viewActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNotFound);
