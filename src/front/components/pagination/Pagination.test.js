// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination component', () => {
  it('renders as expected', () => {
    const props = {
      size: 'large',
      numberOfPagination: 5,
    };
    const component = shallow(<Pagination {...props} />);
    expect(component).toMatchSnapshot();
  });
});
