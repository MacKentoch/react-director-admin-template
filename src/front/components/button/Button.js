// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger',
  onClick: (event?: SyntheticEvent<>) => any,
  children: any,
};

const Button = ({ type, onClick, children }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx({
        btn: true,
        'btn-default': type === 'default',
        'btn-primary': type === 'primary',
        'btn-success': type === 'success',
        'btn-info': type === 'info',
        'btn-warning': type === 'warning',
        'btn-danger': type === 'danger',
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
