
'use strict';

import React              from 'react';
import TeamMateAddButton  from '../../../../src/app/components/teamMates/teamMateAddButton/TeamMateAddButton';
import renderer           from 'react-test-renderer';
import { mount }          from 'enzyme';

describe('TeamMateAddButton component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TeamMateAddButton />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should call onAdd postback on button click', () => {
    const onAddMock = jest.fn();
    const TeamMateAddButtonComponent = mount(
      <TeamMateAddButton
        onAdd={onAddMock}
      />
    );
    TeamMateAddButtonComponent.find('button').simulate('click');
    expect(onAddMock).toHaveBeenCalled();
  });
});
