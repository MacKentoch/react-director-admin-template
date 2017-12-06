// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import Highlight          from 'react-highlight';
import {
  AnimatedView,
  Panel,
  Tweet,
  WriteNewTweet,
  ListTweetsContainer
}                         from '../../components';
import JannieIMG          from '../../img/Jannie.png';
import EmmetIMG           from '../../img/Emmet.png';

function DemoTweetMessage() {
  return (
    <p>
      In hac
      <a href="#">
        habitasse
      </a>
       platea dictumst. Proin ac nibh rutrum lectus rhoncus eleifend.
      <a
        href="#"
        className="text-danger">
        <strong>
          #dev
        </strong>
      </a>
    </p>
  );
}

class TwitterFeed extends PureComponent {
  static propTypes= {
    actions: PropTypes.shape({
      enterTwitterFeed: PropTypes.func.isRequired,
      leaveTwitterFeed: PropTypes.func.isRequired
    })
  };

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

      // import image or use relative path as src to image
      // in this example, consider:
      // import JannieIMG          from '../../../img/Jannie.png';
      // import EmmetIMG           from '../../../img/Emmet.png';

      // in render():
      <Panel
        title="Twitter feed"
        hasTitle={true}
        bodyBackGndColor={'#FFF'}>
        <WriteNewTweet />
        <ListTweetsContainer>
          <Tweet
            time={'30 min ago'}
            author={'Emmet'}
            authorAvatar={EmmetIMG}>
            <DemoTweetMessage />
          </Tweet>
          <Tweet
            time={'35 min ago'}
            author={'Jannie'}
            authorAvatar={JannieIMG}>
            <DemoTweetMessage />
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
                  author={'Emmet'}
                  authorAvatar={EmmetIMG}>
                  <DemoTweetMessage />
                </Tweet>
                <Tweet
                  time={'35 min ago'}
                  author={'Jannie'}
                  authorAvatar={JannieIMG}>
                  <DemoTweetMessage />
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

export default TwitterFeed;
