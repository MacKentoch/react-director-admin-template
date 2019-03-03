// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import cx         from 'classnames';

const Notification = ({
  children,
  type
}) => (
  <div
    className={
      cx({
        'alert':          true,
        'alert-success':  type === 'success',
        'alert-info':     type === 'info',
        'alert-warning':  type === 'warning',
        'alert-danger':   type === 'danger'
      })
    }>
    <button
      data-dismiss="alert"
      className="close close-sm"
      type="button">
      <i className="fa fa-times" />
    </button>
    { children }
  </div>
);

Notification.propTypes = {
  type:     PropTypes.oneOf(['danger', 'success', 'info', 'warning']),
  children: PropTypes.node
};

Notification.defaultProps = {
  type: 'info'
};

export default Notification;
