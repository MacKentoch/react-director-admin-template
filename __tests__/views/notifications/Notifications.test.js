// @flow weak

import React            from 'react';
import Notifications    from '../../../src/app/views/notifications/Notifications';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  shallow
}                       from 'enzyme';
import { 
  MemoryRouter
}                       from 'react-router';

// react-highlight uses findDOMNode: 
// -> jest will throw errors (no way to counter that...)
jest.mock('react-highlight');


describe('Notifications view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterNotifications: () => {},
        leaveNotifications: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Notifications {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterNotifications on mount', () => {
    const mockenterNotifications = jest.fn();
    const mockProps = {
      actions: {
        enterNotifications: mockenterNotifications,
        leaveNotifications: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <Notifications {...mockProps} />
    );
    expect(mockenterNotifications.mock.calls.length).toBe(1);
  });

  it('triggers leaveNotifications on unMount', () => {
    const mockleaveNotifications = jest.fn();
    const mockProps = {
      actions: {
        enterNotifications: () => {},
        leaveNotifications: mockleaveNotifications
      }
    };
    const wrapper = shallow(
      <Notifications {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveNotifications.mock.calls.length).toBe(1);
  });
});
