'use strict';

import React, {
  Component,
  PropTypes
}               from 'react';

class SearchForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.searchinput.focus();
  }

  render() {
    const props = this.props;
    return (
      <form
        className="sidebar-form"
        onKeyPress={(e) =>this.handlesFormKeyPress(e) }>
        <div className="input-group">
          <input
            ref={
              (ref) => {
                this.searchinput = ref;
              }
            }
            type="text"
            name="searchinput"
            className="form-control"
            placeholder="Search..."/>
          <span className="input-group-btn">
            <button
              onClick={(e) => props.onSearchSubmit(e)}
              name="search"
              id="search-btn"
              className="btn btn-flat">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    );
  }

  handlesButtonPress(event) {
    event.preventDefault();
    this.props.onSearchSubmit(this.searchinput.value.trim());
  }

  handlesFormKeyPress(event) {
    if (event.charCode === 13) {
      event.preventDefault();
      this.props.onSearchSubmit(this.searchinput.value.trim());
    }
  }
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func
};

export default SearchForm;
