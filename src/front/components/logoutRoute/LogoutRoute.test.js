// @flow

import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import LogoutRoute from './LogoutRoute';

describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <LogoutRoute />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
