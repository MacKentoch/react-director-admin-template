// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  aligned?: boolean,
  previous: any,
  next: any,
};

const Pager = ({ aligned = false, previous, next }: Props) => (
  <nav>
    <ul className="pager">
      <li
        className={cx({
          previous: aligned,
        })}
      >
        <a href="#">{previous}</a>
      </li>
      <li
        className={cx({
          next: aligned,
        })}
      >
        <a href="#">{next}</a>
      </li>
    </ul>
  </nav>
);

Pager.displayName = 'Pager';

Pager.propTypes = {
  aligned: PropTypes.bool,
  previous: PropTypes.node.isRequired,
  next: PropTypes.node.isRequired,
};

export default Pager;
