'use strict';

import React from 'react';
import TodoList from '../../todoList/TodoList';
import TeamMates from '../../teamMates/TeamMates';
import TwitterFeed from '../..twitterFeed/TwitterFeed';
import WorkProgress from '../../workProgress/WorkProgress';
import Notifications from '../../notification/Notification';
import EarningGraph from '../../earningGraph/EarningGraph';
import Footer from '../../footer/Footer';
import StatsCard from '../../statsCard/StatsCard';

const AsideRight = () => {
  return (
    <aside className="right-side">
      {/* <!-- Main content --> */}
      <section className="content">

        <div
          className="row"
          style={{marginBottom: '5px'}}>
          <div className="col-md-3">
            <StatsCard
              statValue={'3200'}
              statLabel={'Total Tasks'}
              icon={<i className="fa fa-check-square-o"></i>}
              color={'red'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'2200'}
              statLabel={'Total Messages'}
              icon={<i className="fa fa-envelope-o"></i>}
              color={'violet'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'100,320'}
              statLabel={'Total Profit'}
              icon={<i className="fa fa-dollar"></i>}
              color={'blue'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'4567'}
              statLabel={'Total Documents'}
              icon={<i className="fa fa-paperclip"></i>}
              color={'green'}
            />
          </div>
        </div>

        {/* <!-- Main row --> */}
        <div className="row">
          <div className="col-md-8">
            <EarningGraph />
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
            <TeamMates />
          </div>
          <div className="col-md-7">
            <TodoList />
          </div>
        </div>
      {/* <!-- row end --> */}
      </section>
      {/* <!-- /.content --> */}
      <Footer />
    </aside>
  );
};

export default AsideRight;
