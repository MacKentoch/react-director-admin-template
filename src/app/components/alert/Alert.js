import React, { PropTypes } from 'react';
import cx from 'classnames';


const Alert = ({ type, children }) => {
  return (
    <div
      className={
        cx({
          alert: true,
          'alert-block': true,
          'alert-danger': type === 'danger',
          'alert-info': type === 'info',
          'alert-warning': type === 'warning',
          'alert-success': type === 'success'
        })
      }>
      <button
        data-dismiss="alert"
        className="close close-sm"
        type="button">
        <i className="fa fa-times"></i>
      </button>
      { children }
    </div>
  );
};

Alert.PropTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['danger', 'info', 'warning', 'success'])
};

Alert.defaultProps = {
  type: 'info'
};

export default Alert;
