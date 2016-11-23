import React, {PropTypes} from 'react';
import cx from 'classnames';

const Pagination = ({size, numberOfPagination}) => {
  const arrayOfPaginationIndexes = [...Array(numberOfPagination)].map((_, y) =>  y + 1);

  return (
    <ul
      className={
        cx({
          pagination: true,
          'pagination-lg': size === 'large',
          'pagination-sm': size === 'small'
        })
      }>
      <li>
        <a href="#">
          «
        </a>
      </li>
      {
        arrayOfPaginationIndexes.map(
          (index, key) => {
            return (
              <li key={key}>
                <a href="#">
                  {index}
                </a>
              </li>
            );
          }
        )
      }
      <li>
        <a href="#">
          »
        </a>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  size: PropTypes.oneOf(['large', 'default', 'small']),
  numberOfPagination: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  size: 'default',
  numberOfPagination: 5
};

export default Pagination;
