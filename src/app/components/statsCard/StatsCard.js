'use strict';

import React, { PropTypes } from 'react';

const StatsCard = (props) => {
  const colorClass = `sm-st-icon st-${props.color}`;
  return (
    <div className="sm-st clearfix">
      <span className={colorClass}>
        {props.icon}
      </span>
      <div className="sm-st-info">
        <span>
          {props.statValue}
        </span>
        {props.statLabel}
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  statValue: PropTypes.string,
  statLabel: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.oneOf([
    'red',
    'blue',
    'violet',
    'green'
  ])
};

StatsCard.defaultProps = {
  statValue: '0',
  statLabel: 'unknown',
  icon: (<i className="fa fa-check-square-o"></i>)
  color: 'blue'
};

export default StatsCard;
