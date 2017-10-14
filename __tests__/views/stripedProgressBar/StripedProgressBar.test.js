
// @flow weak

import React                from 'react';
import StripedProgressBar   from '../../../src/app/views/stripedProgressBar/StripedProgressBar';
import renderer             from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  shallow
}                           from 'enzyme';
import { 
  MemoryRouter
}                           from 'react-router';

// react-highlight uses findDOMNode: 
// -> jest will throw errors (no way to counter that...)
jest.mock('react-highlight');


describe('StripedProgressBar view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterStripedProgressBar: () => {},
        leaveStripedProgressBar: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <StripedProgressBar {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterStripedProgressBar on mount', () => {
    const mockenterStat = jest.fn();
    const mockProps = {
      actions: {
        enterStripedProgressBar: mockenterStat,
        leaveStripedProgressBar: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <StripedProgressBar {...mockProps} />
    );
    expect(mockenterStat.mock.calls.length).toBe(1);
  });

  it('triggers leaveStripedProgressBar on unMount', () => {
    const mockleaveStat = jest.fn();
    const mockProps = {
      actions: {
        enterStripedProgressBar: () => {},
        leaveStripedProgressBar: mockleaveStat
      }
    };
    const wrapper = shallow(
      <StripedProgressBar {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveStat.mock.calls.length).toBe(1);
  });
});
