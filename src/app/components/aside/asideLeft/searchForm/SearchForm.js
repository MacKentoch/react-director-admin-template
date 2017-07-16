// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';

class SearchForm extends PureComponent {
  static propTypes = {
    onSearchSubmit: PropTypes.func
  };

  searchinput = null;

  componentDidMount() {
    this.searchinput.focus();
  }

  render() {
    return (
      <form
        className="sidebar-form"
        onKeyPress={this.handlesFormKeyPress}>
        <div className="input-group">
          <input
            ref={this.getRef}
            type="text"
            name="searchinput"
            className="form-control"
            placeholder="Search..."/>
          <span className="input-group-btn">
            <button
              onClick={this.handlesFormKeyPress}
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

  getRef = (ref) => (this.searchinput = ref)

  handlesFormKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      const { onSearchSubmit } = this.props;
      onSearchSubmit(this.searchinput.value.trim());
    }
  }
}

export default SearchForm;
