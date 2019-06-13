// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Stat from './Stat';

describe('Stat component', () => {
  it('renders as expected', () => {
    const props = {
      statLabel: 'label',
    };

    const component = shallow(<Stat {...props} />);
    expect(component).toMatchSnapshot();
  });
});
