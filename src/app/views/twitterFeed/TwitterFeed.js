import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import {
  Panel,
  Tweet,
  WriteNewTweet,
  ListTweetsContainer
}                         from '../../components';
import shallowCompare     from 'react-addons-shallow-compare';
import Highlight          from 'react-highlight';


class TwitterFeed extends Component {

  state = {
    animated: true,
    viewEnters: false
  };

  componentWillMount() {
    const { actions: { enterTwitterFeed } } = this.props;
    enterTwitterFeed();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      () => this.setState({viewEnters: true}),
      500
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { actions: { leaveTwitterFeed } } = this.props;
    leaveTwitterFeed();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const {
      animated,
      viewEnters
    } = this.state;

    const source = `
      // import
      import {
        Tweet,
        WriteNewTweet,
        ListTweetsContainer
      } from './_SOMEWHERE_/components';

      // in render():
      <Panel
        title="Twitter feed"
        hasTitle={true}
        bodyBackGndColor={'#FFF'}>
        <WriteNewTweet />
        <ListTweetsContainer>
          <Tweet
            time={'30 min ago'}
            author={'John Doe'}
            authorAvatar={require('../../vendors/img/26115.jpg')}>
            <demoTweetMessage />
          </Tweet>
          <Tweet
            time={'35 min ago'}
            author={'John Doe'}
            authorAvatar={require('../../vendors/img/26115.jpg')}>
            <demoTweetMessage />
          </Tweet>
        </ListTweetsContainer>
      </Panel>
      `;

    return(
      <section className={
        cx({
          'content':       true,
          'animatedViews': animated,
          'invisible':     !viewEnters,
          'view-enter':    viewEnters
        })
      }>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
          <Panel
            title="Twitter feed"
            hasTitle={true}
            bodyBackGndColor={'#FFF'}>
            <WriteNewTweet />
            <ListTweetsContainer>
              <Tweet
                time={'30 min ago'}
                author={'John Doe'}
                authorAvatar={require('../../vendors/img/26115.jpg')}>
                <demoTweetMessage />
              </Tweet>
              <Tweet
                time={'35 min ago'}
                author={'John Doe'}
                authorAvatar={require('../../vendors/img/26115.jpg')}>
                <demoTweetMessage />
              </Tweet>
            </ListTweetsContainer>
          </Panel>
        </div>
      </div>
      {/* source: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Source"
            hasTitle={true}>
            <Highlight className="javascript">
              {source}
            </Highlight>
          </Panel>
        </div>
      </div>
      </section>
    );
  }
}

TwitterFeed.propTypes= {
  actions: PropTypes.shape({
    enterTwitterFeed: PropTypes.func.isRequired,
    leaveTwitterFeed: PropTypes.func.isRequired
  })
};

export default TwitterFeed;
