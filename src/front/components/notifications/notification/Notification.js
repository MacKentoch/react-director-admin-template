// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  type: 'danger' | 'success' | 'info' | 'warning',
  children: any,
};

const Notification = ({ children, type = 'info' }: Props) => (
  <div
    className={cx({
      alert: true,
      'alert-success': type === 'success',
      'alert-info': type === 'info',
      'alert-warning': type === 'warning',
      'alert-danger': type === 'danger',
    })}
  >
    <button data-dismiss="alert" className="close close-sm" type="button">
      <i className="fa fa-times" />
    </button>
    {children}
  </div>
);

Notification.displayName = 'Notification';

Notification.propTypes = {
  type: PropTypes.oneOf(['danger', 'success', 'info', 'warning']),
  children: PropTypes.node,
};

export default Notification;
