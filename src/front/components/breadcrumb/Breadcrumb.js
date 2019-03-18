// @flow

/* eslint consistent-return: 0 */
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  path: Array<string>,
};

const Breadcrumb = ({ path }: Props) => (
  <ul className="breadcrumb">
    {path.length === 0 && <div />}
    {path.length > 0 &&
      path.map((view, viewIndex) => {
        if (viewIndex === 0) {
          return (
            <li key={viewIndex}>
              <a href="#">
                <i className="fa fa-home" />
                &nbsp;
                {view}
              </a>
            </li>
          );
        }
        if (viewIndex < path.length - 1) {
          return (
            <li key={viewIndex} className="active">
              {view}
            </li>
          );
        }
        if (viewIndex === path.length - 1) {
          return (
            <li key={viewIndex} className="active">
              {view}
            </li>
          );
        }
      })}
  </ul>
);

Breadcrumb.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Breadcrumb;
