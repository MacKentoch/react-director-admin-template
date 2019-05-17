// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuHeader from './MenuHeader';

describe('MenuHeader component', () => {
  it('renders as expected', () => {
    const onClick = jest.fn();

    const component = shallow(
      <div>
        <MenuHeader
          title="menuHeaderTitle"
          backColor="#F1F2F3"
          isCollapsed
          onClick={onClick}
        />
      </div>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();

    const component = mount(
      <div>
        <MenuHeader
          title="menuHeaderTitle"
          backColor="#F1F2F3"
          isCollapsed
          onClick={onClick}
        />
      </div>,
    );
    const button = component.find('a').first();
    const icon = component.find('.fa-angle-up').first();

    // console.log('icon: ', icon.props().style);
    // expect(icon.props().style).toMatchObject({
    //   WebkitTransform: 'rotate(180deg)',
    //   transform: 'rotate(180deg)',
    // });
    button.simulate('click');
    expect(onClick).toHaveBeenCalled();
    expect(icon.props().style).toMatchObject({
      WebkitTransform: 'rotate(0deg)',
      transform: 'rotate(0deg)',
    });
  });

  it('should have icon 180 deg rotation', () => {
    const onClick = jest.fn();

    const component = mount(
      <MenuHeader
        title="menuHeaderTitle"
        backColor="#F1F2F3"
        isCollapsed={false}
        onClick={onClick}
      />,
    );
    const icon = component.find('.fa-angle-up').first();

    expect(icon.props().style).toMatchObject({
      WebkitTransform: 'rotate(180deg)',
      transform: 'rotate(180deg)',
    });
  });

  it('should have icon 0 deg rotation', () => {
    const onClick = jest.fn();

    const component = mount(
      <MenuHeader
        title="menuHeaderTitle"
        backColor="#F1F2F3"
        isCollapsed={true}
        onClick={onClick}
      />,
    );
    const icon = component.find('.fa-angle-up').first();

    expect(icon.props().style).toMatchObject({
      WebkitTransform: 'rotate(0deg)',
      transform: 'rotate(0deg)',
    });
  });
});
