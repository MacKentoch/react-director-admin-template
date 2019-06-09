// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Panel from './Panel';

describe('Panel component', () => {
  it('renders as expected', () => {
    const props = {
      hasTitle: true,
      title: 'title',
    };
    const component = shallow(
      <Panel {...props}>
        <p>a child</p>
      </Panel>,
    );
    expect(component).toMatchSnapshot();
  });
});
