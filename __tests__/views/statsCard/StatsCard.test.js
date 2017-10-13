
// @flow weak

import React            from 'react';
import StatsCard        from '../../../src/app/views/statsCard/statsCard';
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


describe('StatsCard view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterStatsCard: () => {},
        leaveStatsCard: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <StatsCard {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterStatsCard on mount', () => {
    const mockenterStat = jest.fn();
    const mockProps = {
      actions: {
        enterStatsCard: mockenterStat,
        leaveStatsCard: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <StatsCard {...mockProps} />
    );
    expect(mockenterStat.mock.calls.length).toBe(1);
  });

  it('triggers leaveStatsCard on unMount', () => {
    const mockleaveStat = jest.fn();
    const mockProps = {
      actions: {
        enterStatsCard: () => {},
        leaveStatsCard: mockleaveStat
      }
    };
    const wrapper = shallow(
      <StatsCard {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveStat.mock.calls.length).toBe(1);
  });
});
