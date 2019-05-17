// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import AsideRight from './AsideRight';

describe('AsideRight component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <AsideRight isAnimated isExpanded>
          <p>Aside right children</p>
        </AsideRight>
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
