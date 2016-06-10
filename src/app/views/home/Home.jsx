'use strict';

import React, { PropTypes, Component } from 'react';
import classNames                      from 'classnames';
// import { Link }   from 'react-router';
import {
  StatsCard,
  Footer,
  EarningGraph,
  Notifications,
  WorkProgress,
  TwitterFeed,
  TodoList,
  TeamMates
}                                     from '../../components';
import { earningGraphMockData }       from '../../models';


class Home extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      animated: true,
      viewEnters: false,
      earningGraphDemoData: earningGraphMockData
    };
  }

  componentWillMount() {
    this.props.actions.enterHome();
  }

  componentDidMount() {
    this.setState = { viewEnters  : true };
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  render() {
    return(
      <section className="content">
        <div
          className="row"
          style={{marginBottom: '5px'}}>
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
        </div>

        <div className="row">
          <div className="col-md-8">
            <EarningGraph
              data={this.state.earningGraphDemoData}
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
            <TeamMates />
          </div>
          <div className="col-md-7">
            <TodoList />
          </div>
        </div>
        <Footer />
      </section>
    );
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews'    : this.state.animated,
      'view-enter'       : this.state.viewEnters
    });
    return homeViewClasses;
  }
}

Home.propTypes= {
  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func
  })
};

export default Home;
