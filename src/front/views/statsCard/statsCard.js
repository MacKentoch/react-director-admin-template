// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedView,
  Panel,
  StatsCard as StatsCardComponent,
} from '../../components';
import Highlight from 'react-highlight';
import { type RouterProps } from '../../types/react-router';

type Props = {
  actions: {
    enterStatsCard: () => any,
    leaveStatsCard: () => any,
  },
} & RouterProps;

const source = `
  // import
  import { StatsCard } from './_SOMEWHERE_/components';

  // in render():
  <div className="col-md-3">
    <StatsCard
      statValue={'3200'}
      statLabel={'Total Tasks'}
      icon={<i className="fa fa-check-square-o"></i>}
      backColor={'red'}
    />
  </div>
  <div className="col-md-3">
    <StatsCard
      statValue={'2200'}
      statLabel={'Total Messages'}
      icon={<i className="fa fa-envelope-o"></i>}
      backColor={'violet'}
    />
  </div>
  <div className="col-md-3">
    <StatsCard
      statValue={'100,320'}
      statLabel={'Total Profit'}
      icon={<i className="fa fa-dollar"></i>}
      backColor={'blue'}
    />
  </div>
  <div className="col-md-3">
    <StatsCard
      statValue={'4567'}
      statLabel={'Total Documents'}
      icon={<i className="fa fa-paperclip"></i>}
      backColor={'green'}
    />
  </div>
`;

function StatsCard({ actions: { enterStatsCard, leaveStatsCard } }: Props) {
  useEffect(() => {
    enterStatsCard();

    return () => {
      leaveStatsCard();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Stats cards"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}
          >
            <div className="row">
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'3200'}
                  statLabel={'Total Tasks'}
                  icon={<i className="fa fa-check-square-o" />}
                  backColor={'red'}
                />
              </div>
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'2200'}
                  statLabel={'Total Messages'}
                  icon={<i className="fa fa-envelope-o" />}
                  backColor={'violet'}
                />
              </div>
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'100,320'}
                  statLabel={'Total Profit'}
                  icon={<i className="fa fa-dollar" />}
                  backColor={'blue'}
                />
              </div>
              <div className="col-md-3">
                <StatsCardComponent
                  statValue={'4567'}
                  statLabel={'Total Documents'}
                  icon={<i className="fa fa-paperclip" />}
                  backColor={'green'}
                />
              </div>
            </div>
          </Panel>
        </div>
      </div>
      {/* source: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel title="Source" hasTitle={true}>
            <Highlight className="javascript">{source}</Highlight>
          </Panel>
        </div>
      </div>
    </AnimatedView>
  );
}

StatsCard.displayName = 'StatsCard';

StatsCard.propTypes = {
  actions: PropTypes.shape({
    enterStatsCard: PropTypes.func.isRequired,
    leaveStatsCard: PropTypes.func.isRequired,
  }),
};

export default StatsCard;
