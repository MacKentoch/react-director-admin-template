'use strict';

import React, { PropTypes, Component } from 'react';
import classNames                      from 'classnames';
import {
  Footer
}                                     from '../../components';


class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      viewEnters: false
    };
  }

  componentWillMount() {
    this.props.actions.enterGeneral();
  }

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      ()=>this.setState({viewEnters: true}),
      500
    );
  }

  componentWillUnmount() {
    this.props.actions.leaveGeneral();
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const generalViewClasses = classNames({
      'content':        true,
      'animatedViews':  this.state.animated,
      'invisible':      !this.state.viewEnters,
      'view-enter':     this.state.viewEnters
    });

    return(
      <section className={generalViewClasses}>

        <Footer />
      </section>
    );
  }
}

General.propTypes= {
  actions: PropTypes.shape({
    enterGeneral: PropTypes.func,
    leaveGeneral: PropTypes.func
  })
};

export default General;
