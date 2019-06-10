// @flow

import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import PrivateRoute from './PrivateRoute';

describe('Panel component', () => {
  it('renders as expected', () => {
    // spy and mock Storage API (sessionStorage and localStorage)
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => 'a fake token key');

    const ChildComponent = () => <p>a child component</p>;

    const component = shallow(
      <MemoryRouter>
        <PrivateRoute>
          <ChildComponent />
        </PrivateRoute>
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
