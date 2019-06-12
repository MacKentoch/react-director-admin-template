// @flow

import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('renders as expected', () => {
    const props = {
      barSize: 'progress',
      barStriped: false,
      barStyle: 'primary',
      active: false,
      valueNow: 0,
      valueMin: 0,
      valueMax: 100,
      screenReadersText: 'progress',
    };

    const component = shallow(<ProgressBar {...props} />);
    expect(component).toMatchSnapshot();
  });
});
