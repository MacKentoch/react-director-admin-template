
'use strict';

import React              from 'react';
import TextInput          from '../../../src/app/components/textInput/TextInput';
import renderer           from 'react-test-renderer';

describe('TextInput component', () => {
  const mockProps = {
    label:    'test',
    id:       1,
    value:    '',
    onChange: () => (true)
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TextInput {...mockProps}/>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
