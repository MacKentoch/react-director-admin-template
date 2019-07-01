// @flow

// #region imports
import { createGlobalStyle } from 'styled-components';
import { smoothFadeInUp } from './config';
// #endregion

export const injectGlobalStyle = () => createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  .invisible {
    opacity: 0;
  }

  .view-enter {
    opacity: 0;

    animation-name: ${smoothFadeInUp()};
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
    animation-delay: 0s;
    animation-fill-mode: both;

    z-index: 1;
  }

  /* fix form inline */
  .form-inline>* {
    margin: 5px 3px;
  }

  /* fix */
  .panel-heading {
    z-index: 1 !important;
  }

  /* fix */
  .btn {
    margin: {
      left: 2px;
      right: 2px;
    }
  }

  /* fix */
  .well {
    padding: 7px;
  }

  /* fix */
  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 2px;
    margin-bottom: 0px;
    margin-left: 2px;
    margin-top: 2px;
  }
`;

export default injectGlobalStyle;
