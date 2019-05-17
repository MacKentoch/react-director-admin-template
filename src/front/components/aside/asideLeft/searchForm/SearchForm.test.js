// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  const onSubmitMock = jest.fn();
  const preventDefault = jest.fn();
  const ENTER_KEY = 13;

  it('renders as expected', () => {
    const component = shallow(
      <SearchForm isActive={onSubmitMock} onSearchSubmit={() => {}} />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should sumbit on enterKey press', () => {
    const mockEnterKeyPressEvent = {
      charCode: ENTER_KEY,
      preventDefault,
    };

    const SearchFormComponent = mount(
      <SearchForm onSearchSubmit={onSubmitMock} />,
    );

    SearchFormComponent.find('form').simulate(
      'keypress',
      mockEnterKeyPressEvent,
    );

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
