// @flow

import React from 'react';
import { shallow } from 'enzyme';
import StatsCard from './StatsCard';

describe('StatsCard component', () => {
  it('renders as expected', () => {
    const props = {
      statValue: '120',
      statLabel: 'label',
      icon: <i className="fa fa-check-square-o" />,
      backColor: 'blue',
    };

    const component = shallow(<StatsCard {...props} />);
    expect(component).toMatchSnapshot();
  });
});
