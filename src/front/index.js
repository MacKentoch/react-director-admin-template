// flow

// #region imports
import 'babel-polyfill';
import 'regenerator-runtime';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import 'animate.css';
import './style/director-style.css';
import './style/highlight/darkula.css';
import './style/index.style.scss';
import Root from './Root';
// #endregion

// #region polyfills initializations

// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
// #endregion

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

function renderApp(RootComponent) {
  return render(
    <AppContainer warnings={false}>
      <RootComponent />
    </AppContainer>,
    BootstrapedElement,
  );
}

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
