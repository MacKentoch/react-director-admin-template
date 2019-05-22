// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  const onClickMock = jest.fn();
  const preventDefault = jest.fn();

  it('renders as expected', () => {
    const component = shallow(
      <Button type="default" onClick={() => {}}>
        <p>a button</p>
      </Button>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should call onClick on a click', () => {
    const mockClickEvent = { preventDefault };

    const component = mount(
      <Button type="default" onClick={onClickMock}>
        <p>a button</p>
      </Button>,
    );
    component.simulate('click', mockClickEvent);
    expect(onClickMock).toHaveBeenCalled();
  });
});
