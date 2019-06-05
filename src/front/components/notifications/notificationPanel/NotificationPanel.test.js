// @flow

import React from 'react';
import { shallow } from 'enzyme';
import NotificationPanel from './NotificationPanel';

describe('NotificationPanel component', () => {
  const props = {
    title: 'notification panel title',
  };

  it('renders as expected', () => {
    const component = shallow(
      <NotificationPanel {...props}>
        <p>a NotificationPanel</p>
      </NotificationPanel>,
    );
    expect(component).toMatchSnapshot();
  });
});
