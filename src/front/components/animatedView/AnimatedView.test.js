// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import AnimatedView from './AnimatedView';

describe('AnimatedView component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <AnimatedView>
          <p>an AnimatedView</p>
        </AnimatedView>
      </MemoryRouter>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should be animated by default', () => {
    const component = mount(
      <MemoryRouter>
        <AnimatedView>
          <p>an AnimatedView</p>
        </AnimatedView>
      </MemoryRouter>,
    );

    expect(component.find('.content').hasClass('view-enter')).toEqual(true);
  });

  it('should NOT be animated when prop animated is false', () => {
    const component = mount(
      <MemoryRouter>
        <AnimatedView animated={false}>
          <p>an AnimatedView</p>
        </AnimatedView>
      </MemoryRouter>,
    );

    expect(component.find('.content').hasClass('view-enter')).toEqual(false);
  });
});
