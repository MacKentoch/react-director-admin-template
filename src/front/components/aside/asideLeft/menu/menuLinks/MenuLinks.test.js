// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import MenuLinks from './MenuLinks';

describe('MenuLinks component', () => {
  let activeViewMock;

  const mockViews = [
    { name: 'view1', linkTo: '/view1', faIconName: 'fa-home', itemCount: 1 },
    { name: 'view2', linkTo: '/view2', faIconName: 'fa-user', itemCount: 0 },
  ];

  it('renders as expected', () => {
    activeViewMock = mockViews[0].name;

    const component = shallow(
      <MemoryRouter>
        <MenuLinks activeView={activeViewMock} views={mockViews} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
