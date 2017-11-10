/* global $:true */
// @flow weak

import React, {
  Component
}                       from 'react';
import PropTypes        from 'prop-types';
import {smoothScroll}   from './lib/smoothScroll';
import BackToTopButton  from './backToTopButton/BackToTopButton.jsx';
import {
  Motion,
  spring,
  presets
}                       from 'react-motion';

type Props = any;
type State = any;

class BackToTop extends Component<Props, State> {
  static propTypes = {
    minScrollY:   PropTypes.number,
    scrollTo:     PropTypes.string.isRequired,
    onScrollDone: PropTypes.func
  };

  static defaultProps = {
    minScrollY: 120
  };

  state = {
    windowScrollY: 0,
    showBackButton: false
  };

  componentWillMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    const { showBackButton } = this.state;
    return (
      <Motion style={{x: spring(showBackButton ? 0 : 120, presets.stiff)}}>
        {
          ({x}) => (
            <BackToTopButton
              position={'bottom-right'}
              onClick={this.handlesOnBackButtonClick}
              motionStyle={{
                WebkitTransform:  `translate3d(${x}px, 0, 0)`,
                transform:        `translate3d(${x}px, 0, 0)`
              }}
            />
          )
        }
      </Motion>
    );
  }

  handleWindowScroll = () => {
    const { windowScrollY } = this.state;
    const { minScrollY }    = this.props;

    /* eslint-disable no-undefined */
    const currentWindowScrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    /* eslint-enable no-undefined */

    if (windowScrollY !== currentWindowScrollY) {
      // console.log('scrollTop: ', currentWindowScrollY);
      const shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;

      this.setState({
        windowScrollY: currentWindowScrollY,
        showBackButton: shouldShowBackButton
      });
    }
  }

  scrollDone = () => {
    const { onScrollDone } = this.props;
    if (onScrollDone) {
      onScrollDone();
    }
  }

  handlesOnBackButtonClick = (event) => {
    event.preventDefault();
    const { scrollTo, minScrollY } = this.props;
    const { windowScrollY } = this.state;

    if (windowScrollY && windowScrollY > minScrollY) {
      smoothScroll.scrollTo(scrollTo, this.scrollDone);
    }
  }
}

export default BackToTop;
