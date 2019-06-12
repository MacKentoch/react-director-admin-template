// @flow

import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop component', () => {
  it('renders as expected', () => {
    const ChildComponent = () => <p>a child component</p>;
    const component = shallow(
      <MemoryRouter>
        <ScrollToTop>
          <ChildComponent />
        </ScrollToTop>
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
