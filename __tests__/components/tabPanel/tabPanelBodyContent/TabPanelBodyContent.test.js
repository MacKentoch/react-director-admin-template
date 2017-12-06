
'use strict';

import React                from 'react';
import TabPanelBodyContent  from '../../../../src/app/components/tabPanel/tabPanelBodyContent/TabPanelBodyContent';
import renderer             from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('TabPanelBodyContent component', () => {
  it('renders as expected', () => {
    const mockProps = {
      id: 1,
      isActive: true
    };
    const component = renderer.create(
      <div>
        <TabPanelBodyContent { ...mockProps }>
          <p>TabPanelBody children here</p>
        </TabPanelBodyContent>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
