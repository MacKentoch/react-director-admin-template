// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TeamMember from './TeamMember';

describe('TeamMember component', () => {
  it('renders as expected', () => {
    const props = {
      picture: '',
      firstname: '',
      lastname: '',
      profile: '',
      profileColor: 'info',
    };
    const component = shallow(<TeamMember {...props} />);
    expect(component).toMatchSnapshot();
  });
});
