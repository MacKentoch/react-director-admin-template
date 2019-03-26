// @flow

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  statValue: string,
  statLabel: string,
  icon: any,
  backColor: 'red' | 'blue' | 'violet' | 'green',
};

const StatsCard = ({
  statValue = '0',
  statLabel = 'unknown',
  icon = <i className="fa fa-check-square-o" />,
  backColor = 'blue',
}: Props) => (
  <div className="sm-st clearfix">
    <span className={`sm-st-icon st-${backColor}`}>{icon}</span>
    <div className="sm-st-info">
      <span>{statValue}</span>
      <div>{statLabel}</div>
    </div>
  </div>
);

StatsCard.displayName = StatsCard;

StatsCard.propTypes = {
  statValue: PropTypes.string,
  statLabel: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.oneOf(['red', 'blue', 'violet', 'green']),
};

export default StatsCard;
