import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/modules/actions';
import { TwitterFeed }        from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterTwitterFeed: actions.enterTwitterFeed,
        leaveTwitterFeed: actions.leaveTwitterFeed
      },
      dispatch)
  };
};

const TwitterFeedConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitterFeed);

export default TwitterFeedConnected;
