'use strict';

import React            from 'react';
import EarningGraph     from '../../../src/app/views/earningGraph/EarningGraph';
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

jest.mock('chart.js');
// because of ref issue in snapshot testing
// this.lineChart.getContext mock:
function createNodeMock(/* element */) {
  return {
    getContext: () => ({})
  };
}

describe('EarningGraph view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterEarningGraph: () => {},
        leaveEarningGraph: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <EarningGraph {...props} />
        </MemoryRouter>
      </div>,
      {createNodeMock}
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterEarningGraph on mount', () => {
    const mockenterEarningGraph = jest.fn();
    const mockProps = {
      actions: {
        enterEarningGraph: mockenterEarningGraph,
        leaveEarningGraph: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <EarningGraph {...mockProps} />
    );
    expect(mockenterEarningGraph.mock.calls.length).toBe(1);
  });

  it('triggers leaveBasicElements on unMount', () => {
    const mockleaveEarningGraph = jest.fn();
    const mockProps = {
      actions: {
        enterEarningGraph: () => {},
        leaveEarningGraph: mockleaveEarningGraph
      }
    };
    const wrapper = shallow(
      <EarningGraph {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveEarningGraph.mock.calls.length).toBe(1);
  });
});
