'use strict';

import React         from 'react';
import Alert         from '../../../src/app/views/alert/Alert';
import renderer      from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  shallow
}                    from 'enzyme';
import { 
  MemoryRouter
}                    from 'react-router';

// react-highlight uses findDOMNode: 
// -> jest will throw errors (no way to counter that...)
jest.mock('react-highlight');

describe('Alert view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterAlert: () => {},
        leaveAlert: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Alert {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterAlert on mount', () => {
    const mockEnterAlert = jest.fn();
    const mockProps = {
      actions: {
        enterAlert: mockEnterAlert,
        leaveAlert: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <Alert {...mockProps} />
    );
    // expect(mockEnterAlert).toBeCalled();
    expect(mockEnterAlert.mock.calls.length).toBe(1);
  });

  it('triggers leaveAlert on unMount', () => {
    const mockLeaveAlert = jest.fn();
    const mockProps = {
      actions: {
        enterAlert: () => {},
        leaveAlert: mockLeaveAlert
      }
    };
    const wrapper = shallow(
      <Alert {...mockProps} />
    );
    wrapper.unmount();
    // expect(mockLeaveAlert).toBeCalled();
    expect(mockLeaveAlert.mock.calls.length).toBe(1);
  });
});
