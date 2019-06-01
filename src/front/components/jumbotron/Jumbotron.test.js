// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Jumbotron from './Jumbotron';

describe('Jumbotron component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <Jumbotron>
        <p>a child element</p>
      </Jumbotron>,
    );
    expect(component).toMatchSnapshot();
  });
});
