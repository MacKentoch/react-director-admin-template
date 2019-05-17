// @flow

import React from 'react';
import { shallow } from 'enzyme';
import BackToTopButton from './BackToTopButton';

describe('BackToTopButton component', () => {
  it('renders as expected', () => {
    const props = {
      onClick: () => {},
      position: 'bottom-right',
    };
    const component = shallow(
      <BackToTopButton {...props}>
        <p>button children</p>
      </BackToTopButton>,
    );
    expect(component).toMatchSnapshot();
  });
});
