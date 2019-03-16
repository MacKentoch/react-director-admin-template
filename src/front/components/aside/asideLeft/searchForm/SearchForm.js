// @flow weak

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

type Props = {
  onSearchSubmit: (value: string) => any,
};

function SearchForm({ onSearchSubmit }: Props) {
  const searchinput = useRef();

  useEffect(() => {
    searchinput.current && searchinput.current.focus();
  }, []);

  const handlesFormKeyPress = useCallback(event => {
    if (event && event.charCode === 13) {
      event.preventDefault();
      onSearchSubmit(this.searchinput.value.trim());
    }
  });

  return (
    <form className="sidebar-form" onKeyPress={handlesFormKeyPress}>
      <div className="input-group">
        <input
          ref={searchinput}
          type="text"
          name="searchinput"
          className="form-control"
          placeholder="Search..."
        />
        <span className="input-group-btn">
          <button
            onClick={handlesFormKeyPress}
            name="search"
            id="search-btn"
            className="btn btn-flat"
          >
            <i className="fa fa-search" />
          </button>
        </span>
      </div>
    </form>
  );
}

SearchForm.displayName = 'SearchForm';

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func,
};

export default SearchForm;
