// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <Alert type="info">
        <p>an alert</p>
      </Alert>,
    );

    expect(component).toMatchSnapshot();
  });
});
