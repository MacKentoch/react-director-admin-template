// @flow

import { keyframes, css } from 'styled-components';

// #region constants
export const MAIN_COLOR = '#000';

export const CONTAINER_CUSTOM_PADDING_LEFT = '2%';
export const CONTAINER_CUSTOM_PADDING_RIGHT = CONTAINER_CUSTOM_PADDING_LEFT;
// #endregion

// #region mixins
export function smoothFadeInUp() {
  return keyframes`
    0% {
      opacity: 0;
      transform: translate3d(0, 3%, 0);
    }

    90% {
      opacity: 0.3;
      transform: none;
    }

    95% {
      opacity: 0.5;
      transform: none;
    }

    100% {
      opacity: 1;
      transform: none;
    }
  `;
}

export function cardShadows() {
  return css`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  `;
}
// #endregion
