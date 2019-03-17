// @flow

import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

type Props = {
  onSearchSubmit: (value: string) => any,
};

function SearchForm({ onSearchSubmit }: Props) {
  const searchinput = useRef(null);

  useEffect(() => {
    searchinput.current && searchinput.current.focus();
  }, []);

  const handlesFormKeyPress = useCallback(
    (event: any) => {
      if (event && event.charCode === 13) {
        event.preventDefault();
        searchinput.current && onSearchSubmit(searchinput.current.value.trim());
      }
    },
    [onSearchSubmit],
  );

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
