
'use strict';

import React              from 'react';
import Panel              from '../../../src/app/components/panel/Panel';
import renderer       from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Panel component', () => {
  it('renders as expected', () => {
    const mockProps = {
      hasTitle: true,
      title: 'a title',
      bodyBackGndColor: '#F1F2F3',
      bodyCustomClass: '',
      sectionCustomClass: ''
    };
    const component = renderer.create(
      <div>
        <Panel {...mockProps }>
          <p>
            panel children
          </p>
        </Panel>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
