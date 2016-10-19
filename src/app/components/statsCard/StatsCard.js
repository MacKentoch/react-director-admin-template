import React, { PropTypes } from 'react';

const StatsCard = ({ statValue, statLabel, icon, backColor }) => {
  const colorClass = `sm-st-icon st-${backColor}`;

  return (
    <div className="sm-st clearfix">
      <span className={ colorClass }>
        { icon }
      </span>
      <div className="sm-st-info">
        <span>
          { statValue }
        </span>
        <div>
          { statLabel }
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  statValue: PropTypes.string,
  statLabel: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.oneOf([
    'red',
    'blue',
    'violet',
    'green'
  ])
};

StatsCard.defaultProps = {
  statValue: '0',
  statLabel: 'unknown',
  icon: (<i className="fa fa-check-square-o"></i>),
  backColor: 'blue'
};

export default StatsCard;
