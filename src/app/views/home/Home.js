'use strict';

import React, { PropTypes, Component } from 'react';
import classNames                      from 'classnames';
import {
  StatsCard,
  EarningGraph,
  Notifications,
  WorkProgress,
  TwitterFeed,
  TodoList,
  TeamMates
}                                     from '../../components';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      viewEnters: false
    };
  }

  componentWillMount() {
    this.props.actions.enterHome();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      ()=>this.setState({viewEnters: true}),
      500
    );
    this.props.actions.fetchEarningGraphDataIfNeeded();
    this.props.actions.fetchTeamMatesDataIfNeeded();
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const homeViewClasses = classNames({
      'content':        true,
      'animatedViews':  this.state.animated,
      'invisible':      !this.state.viewEnters,
      'view-enter':     this.state.viewEnters
    });
    const { teamMates, teamMatesIsFetching } = this.props;
    return(
      <section className={homeViewClasses}>
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
              labels={this.props.earningGraphLabels}
              datasets={this.props.earningGraphDatasets}
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
            <TeamMates
              isFetching={teamMatesIsFetching}
              members={teamMates}
            />
          </div>
          <div className="col-md-7">
            <TodoList />
          </div>
        </div>

      </section>
    );
  }
}

Home.propTypes= {
  earningGraphLabels: PropTypes.array,
  earningGraphDatasets: PropTypes.array,
  teamMatesIsFetching: PropTypes.bool,
  teamMates: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.string,
      firstname: PropTypes.string,
      lastname: PropTypes.string,
      profile: PropTypes.string,
      profileColor: PropTypes.oneOf(['danger', 'warning', 'info', 'success'])
    })
  ),
  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchEarningGraphDataIfNeeded: PropTypes.func,
    fetchTeamMatesDataIfNeeded: PropTypes.func
  })
};

export default Home;
