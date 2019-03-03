// @flow weak

import React            from 'react';
import PropTypes        from 'prop-types';
import cx               from 'classnames';
import { Link }         from 'react-router-dom';

const ViewLink = ({
  isActive, 
  linkTo, 
  viewName, 
  itemCount, 
  faIconName
}) => (
  <li
    className={cx({'active': isActive})}
  >
    <Link
      to={linkTo}>
      <i
        className={`fa ${faIconName}`}
        style={{marginLeft: '10px'}} />
      <span style={{fontSize: '13px'}}>
        {viewName}
      </span>
      {
        itemCount > 0 &&
        <span className="label label-primary pull-right">
          {itemCount}
        </span>
      }
    </Link>
  </li>
);

ViewLink.propTypes = {
  isActive:   PropTypes.bool,
  viewName:   PropTypes.string.isRequired,
  linkTo:     PropTypes.string.isRequired,
  faIconName: PropTypes.string.isRequired,
  itemCount:  PropTypes.number
};

ViewLink.defaultProps = {
  isActive: false
};

export default ViewLink;
