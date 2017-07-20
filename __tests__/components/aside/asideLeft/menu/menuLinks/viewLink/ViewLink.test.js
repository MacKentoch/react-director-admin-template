'use strict';

import React            from 'react';
import { MemoryRouter } from 'react-router';
import ViewLink         from '../../../../../../../src/app/components/aside/asideLeft/menu/menuLinks/viewLink/ViewLink';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('ViewLink component', () => {
  const mockViews = [
    { isActive: true, viewName: 'view1', linkTo: '/view1', faIconName: 'fa-home', itemCount: 1 },
    { isActive: false, viewName: 'view2', linkTo: '/view2', faIconName: 'fa-user', itemCount: 3 }
  ];

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <ViewLink
            isActive={mockViews[0].isActive}
            viewName={mockViews[0].viewName}
            linkTo={mockViews[0].linkTo}
            faIconName={mockViews[0].faIconName}
            itemCount={mockViews[0].itemCount}
          />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
