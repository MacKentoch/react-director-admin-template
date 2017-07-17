// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  Panel,
  Tweet,
  WriteNewTweet,
  ListTweetsContainer
}                         from '../../components';
import Highlight          from 'react-highlight';


class TwitterFeed extends PureComponent {

  componentWillMount() {
    const { actions: { enterTwitterFeed } } = this.props;
    enterTwitterFeed();
  }

  componentWillUnmount() {
    const { actions: { leaveTwitterFeed } } = this.props;
    leaveTwitterFeed();
  }

  render() {
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
            authorAvatar={require('../../img/26115.jpg')}>
            <demoTweetMessage />
          </Tweet>
          <Tweet
            time={'35 min ago'}
            author={'John Doe'}
            authorAvatar={require('../../img/26115.jpg')}>
            <demoTweetMessage />
          </Tweet>
        </ListTweetsContainer>
      </Panel>
      `;

    return(
      <AnimatedView>
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
                  authorAvatar={require('../../img/26115.jpg')}>
                  <demoTweetMessage />
                </Tweet>
                <Tweet
                  time={'35 min ago'}
                  author={'John Doe'}
                  authorAvatar={require('../../img/26115.jpg')}>
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
      </AnimatedView>
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
