// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ViewLink from '../ViewLink';

describe('ViewLink component', () => {
  const mockViews = [
    {
      isActive: true,
      viewName: 'view1',
      linkTo: '/view1',
      faIconName: 'fa-home',
      itemCount: 1,
    },
    {
      isActive: false,
      viewName: 'view2',
      linkTo: '/view2',
      faIconName: 'fa-user',
      itemCount: 3,
    },
  ];

  it('renders as expected', () => {
    const viewName = 'view1';
    const isActive = true;
    const linkTo = '/view1';
    const faIconName = 'fa-home';
    const itemCount = 1;

    const component = shallow(
      <MemoryRouter>
        <ViewLink
          isActive={isActive}
          viewName={viewName}
          linkTo={linkTo}
          faIconName={faIconName}
          itemCount={itemCount}
        />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should display a label when itemCount is SUPERIOR to 0', () => {
    const viewName = 'view1';
    const isActive = true;
    const linkTo = '/view1';
    const faIconName = 'fa-home';
    const itemCount = 2;

    const component = mount(
      <MemoryRouter>
        <ViewLink
          isActive={isActive}
          viewName={viewName}
          linkTo={linkTo}
          faIconName={faIconName}
          itemCount={itemCount}
        />
      </MemoryRouter>,
    );

    expect(component.exists('.label-primary')).toEqual(true);
  });

  it('should NOT display a label when itemCount is INFERIOR or EQUAL to 0', () => {
    const viewName = 'view1';
    const isActive = true;
    const linkTo = '/view1';
    const faIconName = 'fa-home';
    const itemCount = 0;

    const component = mount(
      <MemoryRouter>
        <ViewLink
          isActive={isActive}
          viewName={viewName}
          linkTo={linkTo}
          faIconName={faIconName}
          itemCount={itemCount}
        />
      </MemoryRouter>,
    );

    expect(component.exists('.label-primary')).toEqual(false);
  });
});
