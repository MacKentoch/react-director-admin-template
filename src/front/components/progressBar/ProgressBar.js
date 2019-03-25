// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  barSize: 'xxs' | 'xs' | 'sm' | 'progress',
  barStriped: boolean,
  barStyle: 'primary' | 'success' | 'warning' | 'danger',
  active: boolean,
  valueNow: number,
  valueMin: number,
  valueMax: number,
  screenReadersText: string,
};

const ProgressBar = ({
  barSize = 'progress',
  barStriped = false,
  barStyle = 'primary',
  active = false,
  valueNow = 0,
  valueMin = 0,
  valueMax = 100,
  screenReadersText = 'progress',
}: Props) => {
  return (
    <div
      className={cx({
        progress: true,
        'progress-xxs': barSize === 'xxs',
        'progress-xs': barSize === 'xs',
        'progress-sm': barSize === 'sm',
        active: active,
      })}
    >
      <div
        className={cx({
          'progress-bar': true,
          'progress-bar-striped': barStriped,
          'progress-bar-warning': barStyle === 'warning',
          'progress-bar-primary': barStyle === 'primary',
          'progress-bar-success': barStyle === 'success',
          'progress-bar-danger': barStyle === 'danger',
        })}
        role="progressbar"
        aria-valuenow={valueNow}
        aria-valuemin={valueMin}
        aria-valuemax={valueMax}
        style={{ width: `${valueNow}%` }}
      >
        <span className="sr-only">{screenReadersText}</span>
      </div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  barSize: PropTypes.oneOf(['xxs', 'xs', 'sm', 'progress']),
  barStriped: PropTypes.bool,
  barStyle: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
  active: PropTypes.bool,
  valueNow: PropTypes.number,
  valueMin: PropTypes.number,
  valueMax: PropTypes.number,
  screenReadersText: PropTypes.string,
};

export default ProgressBar;
