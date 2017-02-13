import React, { PropTypes } from 'react';
import cx from 'classnames';

const Button = ({ type, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={ onClick }
      className={
        cx({
          btn: true,
          'btn-default': type === 'default',
          'btn-primary': type === 'primary',
          'btn-success': type === 'success',
          'btn-info':    type === 'info',
          'btn-warning': type === 'warning',
          'btn-danger':  type === 'danger'
        })
      }>
      {  children }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
