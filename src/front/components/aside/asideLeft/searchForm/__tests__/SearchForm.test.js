// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { navigation } from '../../../../../models/navigation';
import SearchForm from '../SearchForm';

describe('AnimatedView component', () => {
  const onSubmitMock = jest.fn();
  const preventDefault = jest.fn();
  const ENTER_KEY = 13;

  it('renders as expected', () => {
    const component = shallow(<SearchForm isActive={onSubmitMock} />);
    expect(component).toMatchSnapshot();
  });
});
