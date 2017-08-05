// @flow weak

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';

class AnimatedView extends Component {
  static propTypes = {
    children: PropTypes.node,
    animated: PropTypes.bool
  };

  static defaultProps = {
    animated: true
  };

  render() {
    const {
      animated,
      children
    } = this.props;

    return (
      <section
        className={
          cx({
            'content':    true,
            'view-enter': animated
          })
        }>
        { children }
      </section>
    );
  }
}

export default AnimatedView;
