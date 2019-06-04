// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('Notification component', () => {
  const props = {
    type: 'info',
  };

  it('renders as expected', () => {
    const component = shallow(
      <Notification {...props}>
        <p>a notification</p>
      </Notification>,
    );
    expect(component).toMatchSnapshot();
  });
});
