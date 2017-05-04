'use strict';

import React                from 'react';
import Tweet                from '../../../../src/app/components/twitterFeed/tweet/Tweet';
import renderer             from 'react-test-renderer';

describe('Tweet component', () => {
  it('renders as expected', () => {
    const mockProps = {
      time: '12:21',
      author: 'Mackentoch',
      authorAvatar: ''
    };
    const component = renderer.create(
      <div>
        <Tweet {...mockProps}>
          <p>Tweet content</p>
        </Tweet>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
