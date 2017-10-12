// @flow weak

import React            from 'react';
import Pagination       from '../../../src/app/views/pagination/Pagination';
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


describe('Pagination view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterPagination: () => {},
        leavePagination: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Pagination {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterPagination on mount', () => {
    const mockenterPagination = jest.fn();
    const mockProps = {
      actions: {
        enterPagination: mockenterPagination,
        leavePagination: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <Pagination {...mockProps} />
    );
    expect(mockenterPagination.mock.calls.length).toBe(1);
  });

  it('triggers leavePagination on unMount', () => {
    const mockleavePagination = jest.fn();
    const mockProps = {
      actions: {
        enterPagination: () => {},
        leavePagination: mockleavePagination
      }
    };
    const wrapper = shallow(
      <Pagination {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleavePagination.mock.calls.length).toBe(1);
  });
});
