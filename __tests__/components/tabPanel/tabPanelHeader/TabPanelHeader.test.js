
'use strict';

import React                from 'react';
import TabPanelHeader       from '../../../../src/app/components/tabPanel/tabPanelHeader/TabPanelHeader';
import renderer             from 'react-test-renderer';

describe('TabPanelHeader component', () => {
  it('renders as expected', () => {
    const mockProps = {
      tabItems: [
        {
          name: 'item1',
          tablink: '/item1',
          isActive: true
        },
        {
          name: 'item2',
          tablink: '/item2',
          isActive: false
        }
      ]
    };
    const component = renderer.create(
      <div>
        <TabPanelHeader { ...mockProps }>
          <p>TabPanelBody children here</p>
        </TabPanelHeader>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
