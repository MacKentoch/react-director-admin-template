// @flow weak

import React            from 'react';
import SimpleTables     from '../../../src/app/views/simpleTables/SimpleTables';
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


describe('SimpleTables view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterSimpleTables: () => {},
        leaveSimpleTables: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <SimpleTables {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterSimpleTables on mount', () => {
    const mockenterSimpleTables = jest.fn();
    const mockProps = {
      actions: {
        enterSimpleTables: mockenterSimpleTables,
        leaveSimpleTables: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <SimpleTables {...mockProps} />
    );
    expect(mockenterSimpleTables.mock.calls.length).toBe(1);
  });

  it('triggers leaveSimpleTables on unMount', () => {
    const mockleaveSimpleTables = jest.fn();
    const mockProps = {
      actions: {
        enterSimpleTables: () => {},
        leaveSimpleTables: mockleaveSimpleTables
      }
    };
    const wrapper = shallow(
      <SimpleTables {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveSimpleTables.mock.calls.length).toBe(1);
  });
});
