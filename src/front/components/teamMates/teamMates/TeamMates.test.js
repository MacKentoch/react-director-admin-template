// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TeamMates from './TeamMates';

describe('TeamMates component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <TeamMates>
        <p>a child</p>
      </TeamMates>,
    );
    expect(component).toMatchSnapshot();
  });
});
