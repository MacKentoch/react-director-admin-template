// @flow weak

import React            from 'react';
import PageNotFound     from '../../../src/app/views/pageNotFound/PageNotFound';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  mount,
  shallow
}                       from 'enzyme';
import {
  MemoryRouter
}                       from 'react-router';


describe('PageNotFound view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterPageNotFound: () => {},
        leavePageNotFound: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <PageNotFound {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterPageNotFound on mount', () => {
    const mockEnterPageNotFound = jest.fn();
    const mockProps = {
      actions: {
        enterPageNotFound: mockEnterPageNotFound,
        leavePageNotFound: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound {...mockProps} />
      </MemoryRouter>
    );
    expect(mockEnterPageNotFound.mock.calls.length).toBe(1);
  });

  it('triggers leavePageNotFound on unMount', () => {
    const mockleavePageNotFound = jest.fn();
    const mockProps = {
      actions: {
        enterPageNotFound: () => {},
        leavePageNotFound: mockleavePageNotFound
      }
    };
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound {...mockProps} />
      </MemoryRouter>
    );
    wrapper.unmount();
    expect(mockleavePageNotFound.mock.calls.length).toBe(1);
  });
});
