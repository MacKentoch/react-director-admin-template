'use strict';

import React          from 'react';
import SearchForm     from '../../../../../src/app/components/aside/asideLeft/searchForm/SearchForm';
import renderer       from 'react-test-renderer';
import { mount }      from 'enzyme';

describe('SearchForm component', () => {
  const onSubmitMock = jest.fn();
  const preventDefault = jest.fn();
  const ENTER_KEY = 13;

  function createNodeMock() {
    // prevent error from this.searchinput.focus() (searchinput is ref to input)
    return {
      focus() {}
    };
  }

  it('renders as expected', () => {
    const component = renderer.create(
      <SearchForm
        isActive={onSubmitMock}
      />,
      { createNodeMock }
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should sumbit on enterKey press', () => {
    const mockEnterKeyPressEvent = {
      charCode: ENTER_KEY,
      preventDefault
    };
    const SearchFormComponent = mount(
      <SearchForm
        onSearchSubmit={onSubmitMock}
      />
    );
    SearchFormComponent.find('form').simulate('keypress', mockEnterKeyPressEvent);
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
