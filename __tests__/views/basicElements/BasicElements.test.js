'use strict';

import React         from 'react';
import BasicElements from '../../../src/app/views/basicElements/BasicElements';
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

describe('BasicElements view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterBasicElements: () => {},
        leaveBasicElements: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <BasicElements {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterBasicElements on mount', () => {
    const mockEnterBasicElements = jest.fn();
    const mockProps = {
      actions: {
        enterBasicElements: mockEnterBasicElements,
        leaveBasicElements: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <BasicElements {...mockProps} />
    );
    // expect(mockEnterBasicElements).toBeCalled();
    expect(mockEnterBasicElements.mock.calls.length).toBe(1);
  });

  it('triggers leaveBasicElements on unMount', () => {
    const mockLeaveBasicElements = jest.fn();
    const mockProps = {
      actions: {
        enterBasicElements: () => {},
        leaveBasicElements: mockLeaveBasicElements
      }
    };
    const wrapper = shallow(
      <BasicElements {...mockProps} />
    );
    wrapper.unmount();
    // expect(mockLeaveBasicElements).toBeCalled();
    expect(mockLeaveBasicElements.mock.calls.length).toBe(1);
  });
});
