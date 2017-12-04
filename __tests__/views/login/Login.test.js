// @flow weak

import React            from 'react';
import Login            from '../../../src/app/views/login/Login';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  // shallow,
  mount
}                       from 'enzyme';
import {
  MemoryRouter
}                       from 'react-router';

// react-highlight uses findDOMNode:
// -> jest will throw errors (no way to counter that...)
jest.mock('react-highlight');


describe('Login view', () => {
  it('renders as expected', () => {
    const props = {
      match:    {},
      location: {},
      history:  {},
      currentView: 'login',
      actions: {
        enterLogin: () => {},
        leaveLogin: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterLogin on mount', () => {
    const mockenterLogin = jest.fn();
    const mockProps = {
      match:    {},
      location: {},
      history:  {},
      currentView: 'login',
      actions: {
        enterLogin: mockenterLogin,
        leaveLogin: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <Login {...mockProps} />
    );
    expect(mockenterLogin.mock.calls.length).toBe(1);
  });

  it('triggers leaveLogin on unMount', () => {
    const mockleaveLogin = jest.fn();
    const mockProps = {
      match:    {},
      location: {},
      history:  {},
      currentView: 'login',
      actions: {
        enterLogin: () => {},
        leaveLogin: mockleaveLogin
      }
    };
    const wrapper = mount(
      <Login {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveLogin.mock.calls.length).toBe(1);
  });
});
