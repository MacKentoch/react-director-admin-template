/* eslint consistent-return: 0 */
import React, { PropTypes } from 'react';

const Breadcrumb = ({ path }) => {
  return (
    <ul className="breadcrumb">
    {
      path.length === 0 &&
      <div></div>
    }
    {
      path.length > 0 &&
      path.map(
        (view, viewIndex) => {
          if (viewIndex === 0) {
            return (
              <li key={viewIndex}>
                <a href="#">
                  <i className="fa fa-home"></i>
                    &nbsp;
                    {view}
                </a>
              </li>
            );
          }
          if (viewIndex < path.length - 1) {
            return (
              <li
                key={viewIndex}
                className="active">
                {view}
              </li>
            );
          }
          if (viewIndex === path.length - 1) {
            return (
              <li key={viewIndex}
                className="active">
                {view}
              </li>
            );
          }
        }
      )
    }
    </ul>
  );
};

Breadcrumb.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Breadcrumb;
