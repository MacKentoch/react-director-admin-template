// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import Panel      from '../panel/Panel';

const BasicForms = ({
  headerTitle
}) => (
  <Panel
    hasTitle={true}
    title={headerTitle}>
    <form role="form">

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="exampleInputPassword1">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputFile">
          File input
        </label>
        <input
          type="file"
          id="exampleInputFile"
        />
        <p className="help-block">
          Example block-level help text here.
        </p>
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox" />
            Check me out
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-info">
        Submit
      </button>

    </form>
  </Panel>
);

BasicForms.propTypes = {
  headerTitle: PropTypes.string
};

BasicForms.defaultProps = {
  headerTitle: 'Basic Forms'
};

export default BasicForms;
