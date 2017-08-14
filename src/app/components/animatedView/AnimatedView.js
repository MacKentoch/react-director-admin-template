// @flow weak

import React, { PureComponent } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';
import { withRouter }       from 'react-router-dom';

class AnimatedView extends PureComponent {
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

export default withRouter(AnimatedView);
