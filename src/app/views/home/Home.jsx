'use strict';

import React      from 'react';
import Jumbotron  from '../../components/jumbotron/Jumbotron.jsx';
import classNames from 'classnames';
import { Link }   from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      animated    : true,
      viewEnters  : false
    };
  }

  componentWillMount() {
    this.props.actions.enterHome();

    this.state = {
      viewEnters  : true
    };
  }

  componentWillUnmount() {
    this.props.actions.leaveHome();
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews'    : this.state.animated,
      'view-enter'       : this.state.viewEnters
    });
    return homeViewClasses;
  }

  render() {
    return(
      <div
        key="homeView"
        className={this.processViewAnimationClasses()}>
        <Jumbotron>
          <h1>
            Full ES2015 ReactJS + Bootstrap
          </h1>
          <h2>
            with Hot Reload!!!
          </h2>
          <h2>
            with React Router (SPA)
          </h2>
          <h1>
            Starter
          </h1>
          <h1></h1>
          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/about'}>
              <i className="fa fa-info"></i>
              &nbsp;
              go to about
            </Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

Home.propTypes= {
  actions: React.PropTypes.object
};

export default Home;
