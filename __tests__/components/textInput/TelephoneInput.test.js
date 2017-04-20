
'use strict';

import React              from 'react';
import TelephoneInput     from '../../../src/app/components/textInput/TelephoneInput';
import renderer           from 'react-test-renderer';
// import { mount }          from 'enzyme';

describe('TelephoneInput component', () => {
  const mockProps = {
    label:    'test',
    id:       1,
    value:    '',
    onChange: () => (true)
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TelephoneInput {...mockProps}/>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  // it('should call onAdd postback on button click', () => {
  //   const onAddMock = jest.fn();
  //   const TeamMateAddButtonComponent = mount(
  //     <TeamMateAddButton
  //       onAdd={onAddMock}
  //     />
  //   );
  //   TeamMateAddButtonComponent.find('button').simulate('click');
  //   expect(onAddMock).toHaveBeenCalled();
  // });
});
