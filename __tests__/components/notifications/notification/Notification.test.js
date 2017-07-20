
'use strict';

import React          from 'react';
import Notification   from '../../../../src/app/components/notifications/notification/Notification';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Notification component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Notification
          type="success">
          <p>
            a notification
          </p>
        </Notification>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
