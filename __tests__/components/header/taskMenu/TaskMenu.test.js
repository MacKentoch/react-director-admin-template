
'use strict';

import React          from 'react';
import TaskMenu       from '../../../../src/app/components/header/taskMenu/TaskMenu';
import renderer       from 'react-test-renderer';

describe('TaskMenu component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TaskMenu />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
