
'use strict';

import React              from 'react';
import Notifications      from '../../../src/app/components/notifications/Notifications';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Notifications component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Notifications />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
