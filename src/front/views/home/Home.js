// @flow

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedView,
  StatsCard,
  EarningGraph,
  Notifications,
  WorkProgress,
  TwitterFeed,
  TodoListDemo,
  TeamMatesDemo,
} from '../../components';
import { type RouterProps } from '../../types/react-router';

type Props = {
  earningGraphLabels: Array<any>,
  earningGraphDatasets: Array<any>,
  teamMatesIsFetching: boolean,
  teamMates: Array<{
    picture: string,
    firstname: string,
    lastname: string,
    profile: string,
    profileColor: 'danger' | 'warning' | 'info' | 'success',
  }>,

  actions: {
    enterHome: () => any,
    leaveHome: () => any,
    fetchEarningGraphDataIfNeeded: () => Promise<any>,
    fetchTeamMatesDataIfNeeded: () => Promise<any>,
  },
} & RouterProps;

function Home({
  actions: {
    enterHome,
    leaveHome,
    fetchEarningGraphDataIfNeeded,
    fetchTeamMatesDataIfNeeded,
  },
  teamMates,
  teamMatesIsFetching,
  earningGraphLabels,
  earningGraphDatasets,
}: Props) {
  useEffect(() => {
    enterHome();
    fetchEarningGraphDataIfNeeded();
    fetchTeamMatesDataIfNeeded();

    return () => {
      leaveHome();
    };
  }, []);

  return (
    <AnimatedView>
      <div className="row" style={{ marginBottom: '5px' }}>
        <div className="col-md-3">
          <StatsCard
            statValue={'3200'}
            statLabel={'Total Tasks'}
            icon={<i className="fa fa-check-square-o" />}
            backColor={'red'}
          />
        </div>
        <div className="col-md-3">
          <StatsCard
            statValue={'2200'}
            statLabel={'Total Messages'}
            icon={<i className="fa fa-envelope-o" />}
            backColor={'violet'}
          />
        </div>
        <div className="col-md-3">
          <StatsCard
            statValue={'100,320'}
            statLabel={'Total Profit'}
            icon={<i className="fa fa-dollar" />}
            backColor={'blue'}
          />
        </div>
        <div className="col-md-3">
          <StatsCard
            statValue={'4567'}
            statLabel={'Total Documents'}
            icon={<i className="fa fa-paperclip" />}
            backColor={'green'}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <EarningGraph
            labels={earningGraphLabels}
            datasets={earningGraphDatasets}
          />
        </div>
        <div className="col-lg-4">
          <Notifications />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <WorkProgress />
        </div>
        <div className="col-md-4">
          <TwitterFeed />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <TeamMatesDemo isFetching={teamMatesIsFetching} members={teamMates} />
        </div>
        <div className="col-md-7">
          <TodoListDemo />
        </div>
      </div>
    </AnimatedView>
  );
}

Home.displayName = 'Home';

Home.propTypes = {
  // react-router 4:
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,

  earningGraphLabels: PropTypes.array,
  earningGraphDatasets: PropTypes.array,
  teamMatesIsFetching: PropTypes.bool,
  teamMates: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profile: PropTypes.string,
      profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
    }),
  ),
  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchEarningGraphDataIfNeeded: PropTypes.func,
    fetchTeamMatesDataIfNeeded: PropTypes.func,
  }),
};

export default Home;
