// @flow

import React from 'react';
import { shallow } from 'enzyme';
import TeamMatesDemo from './TeamMatesDemo';

describe('TeamMatesDemo component', () => {
  it('renders as expected', () => {
    const props = {
      members: [
        {
          picture: '',
          firstname: '',
          lastname: '',
          profile: '',
          profileColor: 'info',
        },
      ],
    };
    const component = shallow(<TeamMatesDemo {...props} />);
    expect(component).toMatchSnapshot();
  });
});
