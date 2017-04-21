
'use strict';

import React              from 'react';
import TextAreaInput      from '../../../src/app/components/textInput/TextAreaInput';
import renderer           from 'react-test-renderer';

describe('TextAreaInput component', () => {
  const mockProps = {
    label:    'test',
    id:       1,
    value:    '',
    onChange: () => (true)
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <TextAreaInput {...mockProps}/>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
