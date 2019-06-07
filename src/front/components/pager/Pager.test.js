// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Pager from './Pager';

describe('Pager component', () => {
  it('renders as expected', () => {
    const props = {
      aligned: true,
      previous: <span>NEXT</span>,
      next: <span>PREV</span>,
    };
    const component = shallow(<Pager {...props} />);
    expect(component).toMatchSnapshot();
  });
});
