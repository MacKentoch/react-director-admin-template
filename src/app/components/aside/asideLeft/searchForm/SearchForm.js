import React, {
  PureComponent,
  PropTypes
}                     from 'react';

class SearchForm extends PureComponent {
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

  getRef = (ref) => {
    this.searchinput = ref;
  }

  handlesFormKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      const { onSearchSubmit } = this.props;
      onSearchSubmit(this.searchinput.value.trim());
    }
  }
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func
};

export default SearchForm;
