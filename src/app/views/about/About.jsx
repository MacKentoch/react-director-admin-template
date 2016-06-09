'use strict';

import React     from 'react';

class About extends React.Component {

  componentWillMount() {
    this.props.actions.enterAbout();
  }

  componentWillUnmount() {
    this.props.actions.leaveAbout();
  }

  render() {
    return(
      <div>
        <h1>
          About
        </h1>
      </div>
    );
  }
}

About.propTypes= {
  actions: React.PropTypes.object
};


export default About;
