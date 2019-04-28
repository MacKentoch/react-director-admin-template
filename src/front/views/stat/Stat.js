// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatedView, Panel, Stat as StatComponent } from '../../components';
import Highlight from 'react-highlight';

type Props = {
  actions: {
    enterStat: () => {},
    leaveStat: () => {},
  },
};

const source = `
  // import
  import { Stat } from './_SOMEWHERE_/components';

  // in render():
  <div className="row">
    <div className="col-md-2">
      <Stat
        statFaIconName="fa-file-o"
        statIconColor="#fa8564"
        statLabel="999 Projects"
      />
    </div>
    <div className="col-md-2">
      <Stat
        statFaIconName="fa-paperclip"
        statIconColor="#45cf95"
        statLabel="999 Documents"
      />
    </div>
    <div className="col-md-2">
      <Stat
        statFaIconName="fa-envelope-o"
        statIconColor="#AC75F0"
        statLabel="999 Messages"
      />
    </div>
    <div className="col-md-2">
      <Stat
        statFaIconName="fa-check-square-o"
        statIconColor="#45cf95"
        statLabel="1000 Tasks"
      />
    </div>
    <div className="col-md-2">
      <Stat
        statFaIconName="fa-dollar"
        statIconColor="#AC75F0"
        statLabel="$99999 Earnings"
      />
    </div>
    <div className="col-md-2">
      <Stat
        statFaIconName="fa-refresh"
        statIconColor="#fa8564"
        statIconSpin={true}
        statLabel="Processing...."
      />
    </div>
  </div>
`;

function Stat({ actions: { enterStat, leaveStat } }: Props) {
  useEffect(() => {
    enterStat();

    return () => {
      leaveStat();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel title="Stat" hasTitle={true} bodyBackGndColor={'#F4F5F6'}>
            <div className="row">
              <div className="col-md-2">
                <StatComponent
                  statFaIconName="fa-file-o"
                  statIconColor="#fa8564"
                  statLabel="999 Projects"
                />
              </div>
              <div className="col-md-2">
                <StatComponent
                  statFaIconName="fa-paperclip"
                  statIconColor="#45cf95"
                  statLabel="999 Documents"
                />
              </div>
              <div className="col-md-2">
                <StatComponent
                  statFaIconName="fa-envelope-o"
                  statIconColor="#AC75F0"
                  statLabel="999 Messages"
                />
              </div>
              <div className="col-md-2">
                <StatComponent
                  statFaIconName="fa-check-square-o"
                  statIconColor="#45cf95"
                  statLabel="1000 Tasks"
                />
              </div>
              <div className="col-md-2">
                <StatComponent
                  statFaIconName="fa-dollar"
                  statIconColor="#AC75F0"
                  statLabel="$99999 Earnings"
                />
              </div>
              <div className="col-md-2">
                <StatComponent
                  statFaIconName="fa-refresh"
                  statIconColor="#fa8564"
                  statIconSpin={true}
                  statLabel="Processing...."
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

Stat.displayName = 'Stat';

Stat.propTypes = {
  actions: PropTypes.shape({
    enterStat: PropTypes.func.isRequired,
    leaveStat: PropTypes.func.isRequired,
  }),
};

export default Stat;
