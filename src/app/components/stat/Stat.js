/* eslint consistent-return: 0 */
import React, { PropTypes } from 'react';

const Stat = ({ statFaIconName, statIconColor, statLabel, statIconSpin }) => {
  return (
    <div className="stat">
      <div style={{textAlign: 'center'}}>
        <span className="fa-stack fa-lg fa-3x">
          <i
            className="fa fa-circle fa-stack-2x"
            style={{color: '#FFFFFF'}}>
          </i>
          <i
            className={`fa ${statFaIconName} ${statIconSpin ? 'fa-spin' : ''} fa-stack-1x fa-inverse`}
            style={{color: statIconColor}}>
          </i>
        </span>
      </div>
      <h5 className="stat-info">
        {statLabel}
      </h5>
    </div>
  );
};

Stat.propTypes = {
  statFaIconName: PropTypes.string.isRequired,
  statIconColor: PropTypes.string,
  statLabel: PropTypes.string.isRequired,
  statIconSpin: PropTypes.bool.isRequired
};

Stat.defaultProps = {
  statColor: '4A4A4A',
  statIconSpin: false
};

export default Stat;
