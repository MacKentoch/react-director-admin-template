import React, { PropTypes } from 'react';
import cx from 'classnames';

const ProgressBar = ({
  barSize,
  barStriped,
  barStyle,
  active,
  valueNow,
  valueMin,
  valueMax,
  screenReadersText
}) => {
  return (
    <div
      className={
        cx({
          progress: true,
          'progress-xxs': barSize === 'xxs',
          'progress-xs': barSize === 'xs',
          'progress-sm': barSize === 'sm',
          'active': active
        })
      }>
      <div
        className={
          cx({
            'progress-bar': true,
            'progress-bar-striped': barStriped,
            'progress-bar-warning': barStyle === 'warning',
            'progress-bar-primary': barStyle === 'primary',
            'progress-bar-success': barStyle === 'success',
            'progress-bar-danger': barStyle === 'danger'
          })
        }
        role="progressbar"
        aria-valuenow={valueNow}
        aria-valuemin={valueMin}
        aria-valuemax={valueMax}
        style={{width: `${valueNow}%`}}>
        <span className="sr-only">
          {screenReadersText}
        </span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  barSize: PropTypes.oneOf(['xxs', 'xs', 'sm', 'progress']),
  barStriped: PropTypes.bool,
  barStyle: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
  active: PropTypes.bool,
  valueNow: PropTypes.number,
  valueMin: PropTypes.number,
  valueMax: PropTypes.number,
  screenReadersText: PropTypes.string
};

ProgressBar.defaultProps = {
  barSize: 'progress',
  barStriped: false,
  barStyle: 'primary',
  active: false,
  valueNow: 0,
  valueMin: 0,
  valueMax: 100,
  screenReadersText: 'progress'
};

export default ProgressBar;
