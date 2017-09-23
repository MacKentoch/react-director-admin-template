'use strict';

import React            from 'react';
import Breadcrumb       from '../../../src/app/views/breadcrumb/Breadcrumb';
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

describe('Breadcrumb view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterBreadcrumb: () => {},
        leaveBreadcrumb: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Breadcrumb {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterBasicProgressBar on mount', () => {
    const mockEnterBreadcrumb = jest.fn();
    const mockProps = {
      actions: {
        enterBreadcrumb: mockEnterBreadcrumb,
        leaveBreadcrumb: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <Breadcrumb {...mockProps} />
    );
    expect(mockEnterBreadcrumb.mock.calls.length).toBe(1);
  });

  it('triggers leaveBasicElements on unMount', () => {
    const mockLeaveBreadcrumb = jest.fn();
    const mockProps = {
      actions: {
        enterBreadcrumb: () => {},
        leaveBreadcrumb: mockLeaveBreadcrumb
      }
    };
    const wrapper = shallow(
      <Breadcrumb {...mockProps} />
    );
    wrapper.unmount();
    expect(mockLeaveBreadcrumb.mock.calls.length).toBe(1);
  });
});
