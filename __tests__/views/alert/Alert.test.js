'use strict';

import React         from 'react';
import Alert         from '../../../src/app/views/alert/Alert';
import renderer      from 'react-test-renderer';

// jest.mock('react-dom', () => ({
//   findDOMNode() { return null; },
//   render() { return null; }
// }));

describe('Alert view', () => {
  const mockEnterAlert = jest.fn();
  const mockLeaveAlert = jest.fn();

  const mockProps = {
    actions: {
      enterAlert: mockEnterAlert,
      leaveAlert: mockLeaveAlert
    }
  };

  const component = renderer.create(
    <div>
      <Alert {...mockProps} />
    </div>
  ).toJSON();

  it('renders as expected', () => {
    expect(component).toMatchSnapshot();
  });

  // it('triggers enterAlert on mount', () => {
  //   expect(mockEnterAlert.mock.calls.length).toBe(1);
  // });
});
