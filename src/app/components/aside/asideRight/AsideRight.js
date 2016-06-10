'use strict';

import React from 'react';
import TodoList from '../../todoList/TodoList';
import TeamMates from '../../teamMates/TeamMates';
import TwitterFeed from '../..twitterFeed/TwitterFeed';
import WorkProgress from '../../workProgress/WorkProgress';

const AsideRight = () => {
  return (
    <aside className="right-side">

      {/* <!-- Main content --> */}
        <section className="content">
          <div className="row" style="margin-bottom:5px;">
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-red"><i className="fa fa-check-square-o"></i></span>
                    <div className="sm-st-info">
                        <span>3200</span>
                        Total Tasks
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-violet"><i className="fa fa-envelope-o"></i></span>
                    <div className="sm-st-info">
                        <span>2200</span>
                        Total Messages
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-blue"><i className="fa fa-dollar"></i></span>
                    <div className="sm-st-info">
                        <span>100,320</span>
                        Total Profit
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="sm-st clearfix">
                    <span className="sm-st-icon st-green"><i className="fa fa-paperclip"></i></span>
                    <div className="sm-st-info">
                        <span>4567</span>
                        Total Documents
                    </div>
                </div>
            </div>
          </div>

          {/* <!-- Main row --> */}
          <div className="row">
            <div className="col-md-8">
              {/* <!--earning graph start--> */}
              <section className="panel">
                <header className="panel-heading">
                    Earning Graph
                </header>
                <div className="panel-body">
                    <canvas id="linechart" width="600" height="330"></canvas>
                </div>
              </section>
              {/* <!--earning graph end--> */}
            </div>

            <div className="col-lg-4">
              {/* <!--chat start--> */}

             <Notifications />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <WorkProgress />
          </div>

          {/* <!--end col-6 --> */}
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
    <div className="footer-main">
      react Director Admin Template
    </div>
  </aside>

  );
};

export default AsideRight;
