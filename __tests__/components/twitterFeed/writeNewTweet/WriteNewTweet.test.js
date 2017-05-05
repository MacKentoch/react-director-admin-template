'use strict';

import React                from 'react';
import WriteNewTweet        from '../../../../src/app/components/twitterFeed/writeNewTweet/WriteNewTweet';
import renderer             from 'react-test-renderer';

describe('WriteNewTweet component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <WriteNewTweet />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
