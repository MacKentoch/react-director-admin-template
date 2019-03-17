// @flow
/* eslint-disable no-undefined */
/* eslint-disable react/prop-types */

// #region imports
import React, { useEffect, useState, useCallback } from 'react';
import BackToTopButton from './backToTopButton/BackToTopButton';
import { Motion, spring, presets } from 'react-motion';
// #endregion

// #region flow types
type Props = {
  minScrollY: number,
  scrollTo?: string,
  onScrollDone?: () => any,
};
// #endregion

function BackToTop({ minScrollY, scrollTo, onScrollDone }: Props) {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const [tickingScollObserve, setTickingScollObserve] = useState(false);

  // #region window scroll event
  const handleWindowScroll = useCallback(() => {
    if (window) {
      /* eslint-disable no-undefined */
      const currentWindowScrollY =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : // $FlowIgnore
            (
              document.documentElement ||
              // $FlowIgnore
              document.body.parentNode ||
              document.body
            ).scrollTop;
      /* eslint-enable no-undefined */

      // scroll event fires to often, using window.requestAnimationFrame to limit computations
      if (!tickingScollObserve) {
        window.requestAnimationFrame(() => {
          if (windowScrollY !== currentWindowScrollY) {
            const shouldShowBackButton = currentWindowScrollY >= minScrollY;

            setWindowScrollY(currentWindowScrollY);
            setShowBackButton(shouldShowBackButton);
          }
          setTickingScollObserve(false);
        });
      }

      setTickingScollObserve(true);
    }
  }, [minScrollY, tickingScollObserve, windowScrollY]);
  // #endregion

  // #region unmount / unmount
  useEffect(() => {
    window && window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window && window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);
  // #endregion

  const handlesOnBackButtonClick = useCallback(
    (event: SyntheticEvent<>) => {
      event && event.preventDefault();

      if (window && windowScrollY && windowScrollY > minScrollY) {
        // using here smoothscroll-polyfill
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        // smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    },
    [minScrollY, windowScrollY],
  );

  // const scrollDone = useCallback(() => {
  //   onScrollDone && onScrollDone();
  // }, [onScrollDone]);

  return (
    <Motion style={{ x: spring(showBackButton ? 0 : 120, presets.stiff) }}>
      {({ x }) => (
        <BackToTopButton
          position={'bottom-right'}
          onClick={handlesOnBackButtonClick}
          motionStyle={{
            WebkitTransform: `translate3d(${x}px, 0, 0)`,
            transform: `translate3d(${x}px, 0, 0)`,
          }}
        />
      )}
    </Motion>
  ); // #endregion
}

BackToTop.displayName = 'BackToTop';

BackToTop.defaultProps = {
  minScrollY: 120,
  onScrollDone: () => {},
};

export default BackToTop;
