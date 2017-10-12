
// @flow weak

import React            from 'react';
import Stat             from '../../../src/app/views/stat/Stat';
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


describe('Stat view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterStat: () => {},
        leaveStat: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Stat {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterStat on mount', () => {
    const mockenterStat = jest.fn();
    const mockProps = {
      actions: {
        enterStat: mockenterStat,
        leaveStat: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <Stat {...mockProps} />
    );
    expect(mockenterStat.mock.calls.length).toBe(1);
  });

  it('triggers leaveStat on unMount', () => {
    const mockleaveStat = jest.fn();
    const mockProps = {
      actions: {
        enterStat: () => {},
        leaveStat: mockleaveStat
      }
    };
    const wrapper = shallow(
      <Stat {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveStat.mock.calls.length).toBe(1);
  });
});
