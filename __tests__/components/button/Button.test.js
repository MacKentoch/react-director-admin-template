'use strict';

import React          from 'react';
import Button         from '../../../src/app/components/button/Button';
import renderer       from 'react-test-renderer';
import { mount }      from 'enzyme';

describe('Button component', () => {
  const onClickMock    = jest.fn();
  const preventDefault  = jest.fn();

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <Button
          type="default"
        >
          <p>
            a button
          </p>
        </Button>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should call onClick on a click', () => {
    const mockClickEvent = { preventDefault };

    const component = mount(
      <Button
        type="default"
        onClick={onClickMock}
      />
    );
    component.simulate('click', mockClickEvent);
    expect(onClickMock).toHaveBeenCalled();
  });
});
