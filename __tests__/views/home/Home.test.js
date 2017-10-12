// @flow weak

import React            from 'react';
import Home             from '../../../src/app/views/home/Home';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  shallow,
  mount
}                       from 'enzyme';
import { 
  MemoryRouter
}                       from 'react-router';

// react-highlight uses findDOMNode: 
// -> jest will throw errors (no way to counter that...)
jest.mock('react-highlight');


describe('Home view', () => {
  it('renders as expected', () => {
    const props = {
      earningGraphLabels: [],
      earningGraphDatasets: [],
      teamMatesIsFetching: false,
      teamMates: [],
      actions: {
        enterHome: () => {},
        leaveHome: () => {},
        fetchEarningGraphDataIfNeeded: () => {},
        fetchTeamMatesDataIfNeeded: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Home {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterHome on mount', () => {
    const mockenterHome = jest.fn();
    const mockProps = {
      actions: {
        enterHome: mockenterHome,
        leaveHome: () => {},
        fetchEarningGraphDataIfNeeded: () => {},
        fetchTeamMatesDataIfNeeded: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <Home {...mockProps} />
    );
    expect(mockenterHome.mock.calls.length).toBe(1);
  });

  it('triggers leaveHome on unMount', () => {
    const mockleaveHome = jest.fn();
    const mockProps = {
      actions: {
        enterHome: () => {},
        leaveHome: mockleaveHome,
        fetchEarningGraphDataIfNeeded: () => {},
        fetchTeamMatesDataIfNeeded: () => {}
      }
    };
    const wrapper = shallow(
      <Home {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveHome.mock.calls.length).toBe(1);
  });
});
