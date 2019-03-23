// @flow

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

type Props = {
  size?: 'large' | 'default' | 'small',
  numberOfPagination: number,
};

const Pagination = ({ size = 'default', numberOfPagination = 5 }: Props) => {
  const arrayOfPaginationIndexes = [...Array(numberOfPagination)].map(
    (_, y) => y + 1,
  );

  return (
    <ul
      className={cx({
        pagination: true,
        'pagination-lg': size === 'large',
        'pagination-sm': size === 'small',
      })}
    >
      <li>
        <a href="#">«</a>
      </li>
      {arrayOfPaginationIndexes.map((index, key) => {
        return (
          <li key={key}>
            <a href="#">{index}</a>
          </li>
        );
      })}
      <li>
        <a href="#">»</a>
      </li>
    </ul>
  );
};

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  size: PropTypes.oneOf(['large', 'default', 'small']),
  numberOfPagination: PropTypes.number.isRequired,
};

export default Pagination;
