'use strict';

import React          from 'react';
import MenuHeader     from '../../../../../../src/app/components/aside/asideLeft/menu/menuHeader/MenuHeader';
import renderer       from 'react-test-renderer';

describe('AnimatedView component', () => {
  it('renders as expected', () => {
    const onClick = jest.fn();
    const component = renderer.create(
      <div>
        <MenuHeader
          title="menuHeaderTitle"
          backColor="#F1F2F3"
          isCollapsed
          onClick={onClick}
        />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
