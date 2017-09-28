// @flow weak

import React            from 'react';
import General          from '../../../src/app/views/general/General';
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


describe('General view', () => {
  it('renders as expected', () => {
    const props = {
      actions: {
        enterGeneral: () => {},
        leaveEarningGraph: () => {}
      }
    };
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <General {...props} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterGeneral on mount', () => {
    const mockenterGeneral = jest.fn();
    const mockProps = {
      actions: {
        enterGeneral: mockenterGeneral,
        leaveGeneral: () => {}
      }
    };
    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <General {...mockProps} />
    );
    expect(mockenterGeneral.mock.calls.length).toBe(1);
  });

  it('triggers leaveGeneral on unMount', () => {
    const mockleaveGeneral = jest.fn();
    const mockProps = {
      actions: {
        enterGeneral: () => {},
        leaveGeneral: mockleaveGeneral
      }
    };
    const wrapper = shallow(
      <General {...mockProps} />
    );
    wrapper.unmount();
    expect(mockleaveGeneral.mock.calls.length).toBe(1);
  });
});
