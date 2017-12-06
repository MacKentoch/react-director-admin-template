// @flow weak

import React                from 'react';
import Panel                from '../panel/Panel';
import Tweet                from './tweet/Tweet';
import WriteNewTweet        from './writeNewTweet/WriteNewTweet';
import ListTweetsContainer  from './listTweetsContainer/ListTweetsContainer';
import JannieIMG            from '../../img/Jannie.png';
import EmmetIMG             from '../../img/Emmet.png';

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

const TwitterFeed = () => (
  <Panel
    hasTitle={true}
    title={'Twitter Feed'}>
    <WriteNewTweet />
    <ListTweetsContainer>
      <Tweet
        time={'30 min ago'}
        author={'Emmet'}
        authorAvatar={ EmmetIMG }>
        <DemoTweetMessage />
      </Tweet>
      <Tweet
        time={'35 min ago'}
        author={'Jannie'}
        authorAvatar={ JannieIMG }>
        <DemoTweetMessage />
      </Tweet>
    </ListTweetsContainer>
  </Panel>
);

export default TwitterFeed;
