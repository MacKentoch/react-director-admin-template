// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import cx         from 'classnames';

const Pager = ({
  aligned,
  previous,
  next
}) => (
  <nav>
    <ul className="pager">
      <li
        className={
          cx({
            'previous': aligned
          })
        }>
        <a href="#">
          {previous}
        </a>
      </li>
      <li
        className={
          cx({
            'next': aligned
          })
        }>
        <a href="#">
          {next}
        </a>
      </li>
    </ul>
  </nav>
);

Pager.propTypes = {
  aligned:  PropTypes.bool,
  previous: PropTypes.node.isRequired,
  next:     PropTypes.node.isRequired
};

Pager.defaultProps = {
  aligned: false
};

export default Pager;
