// @flow
/* eslint consistent-return: 0 */

import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  statFaIconName?: string,
  statIconColor?: string,
  statLabel: string,
  statIconSpin: boolean,
};

const Stat = ({
  statFaIconName = '',
  statIconColor = '#F1F1F1',
  statLabel = '',
  statIconSpin = false,
}: Props) => (
  <div className="stat">
    <div style={{ textAlign: 'center' }}>
      <span className="fa-stack fa-lg fa-3x">
        <i className="fa fa-circle fa-stack-2x" style={{ color: '#FFFFFF' }} />
        <i
          className={`fa ${statFaIconName} ${
            statIconSpin ? 'fa-spin' : ''
          } fa-stack-1x fa-inverse`}
          style={{ color: statIconColor }}
        />
      </span>
    </div>
    <h5 className="stat-info">{statLabel}</h5>
  </div>
);

Stat.propTypes = {
  statFaIconName: PropTypes.string.isRequired,
  statIconColor: PropTypes.string,
  statLabel: PropTypes.string.isRequired,
  statIconSpin: PropTypes.bool.isRequired,
};

Stat.displayName = 'Stat';

export default Stat;
