'use strict';

import React            from 'react';
import BasicProgressBar from '../../../src/app/views/basicProgressBar/BasicProgressBar';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  shallow
}                       from 'enzyme';
import { 
  MemoryRouter
}                    from 'react-router';

// react-highlight uses findDOMNode: 
// -> jest will throw errors (no way to counter that...)
jest.mock('react-highlight');

describe('BasicProgressBar view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterBasicProgressBar: () => {},
        leaveBasicProgressBar: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <BasicProgressBar {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterBasicProgressBar on mount', () => {
    const mockEnterBasicProgressBar = jest.fn();
    const mockProps = {
      actions: {
        enterBasicProgressBar: mockEnterBasicProgressBar,
        leaveBasicProgressBar: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <BasicProgressBar {...mockProps} />
    );
    // expect(mockEnterBasicProgressBar).toBeCalled();
    expect(mockEnterBasicProgressBar.mock.calls.length).toBe(1);
  });

  it('triggers leaveBasicElements on unMount', () => {
    const mockLeaveBasicProgressBar = jest.fn();
    const mockProps = {
      actions: {
        enterBasicProgressBar: () => {},
        leaveBasicProgressBar: mockLeaveBasicProgressBar
      }
    };
    const wrapper = shallow(
      <BasicProgressBar {...mockProps} />
    );
    wrapper.unmount();
    // expect(mockLeaveBasicProgressBar).toBeCalled();
    expect(mockLeaveBasicProgressBar.mock.calls.length).toBe(1);
  });
});
