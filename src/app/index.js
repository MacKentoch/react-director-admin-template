// flow weak

// #region imports
import React                from 'react';
import {render}             from 'react-dom';
import { Provider }         from 'react-redux';
import { AppContainer }     from 'react-hot-loader';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/director-style.css';
import './style/highlight/darkula.css';
import './style/index.style.scss';
import configureStore       from './redux/store/configureStore';
import Root from './Root';
// #endregion

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);
const store                 = configureStore();

// #region polyfills initializations
// tap events
injectTpEventPlugin();

// smoothscroll polyfill
smoothScrollPolyfill.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
// #endregion

const renderApp = RootComponent => {
  render(
    <AppContainer
      warnings={false}
    >
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </AppContainer>,
    BootstrapedElement
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    './Root',
    () => {
      const RootComponent = require('./Root').default;
      renderApp(RootComponent);
    }
  );
}
