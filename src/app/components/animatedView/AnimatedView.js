// @flow weak

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';

const ANIMATION_DELAY_MS = 500;

class AnimatedView extends Component {
  static propTypes = {
    children: PropTypes.node,
    delay:    PropTypes.number
  };

  static defaultProps = {
    delay: ANIMATION_DELAY_MS
  };

  state = {
    animated:   true,
    viewEnters: false
  };

  enterAnimationTimer = null; // timer

  componentDidMount() {
    const { delay } = this.props;

    this.enterAnimationTimer = setTimeout(
      () => this.setState({ viewEnters: true }),
      delay
    );
  }

  componentWillUnmount() {
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { animated, viewEnters } = this.state;
    const { children } = this.props;

    return (
      <section
        className={
          cx({
            'content':    true,
            'invisible':  !viewEnters && animated,
            'view-enter': viewEnters && animated
          })
        }>
      { children }
    </section>
    );
  }
}

export default AnimatedView;
