
'use strict';

import React              from 'react';
import NotificationPanel  from '../../../../src/app/components/notifications/notificationPanel/NotificationPanel';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('NotificationPanel component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <NotificationPanel
          title="notification panel">
          <p>
            notification panel children
          </p>
        </NotificationPanel>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
