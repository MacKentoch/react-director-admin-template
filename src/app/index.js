// flow weak

import React                from 'react';
import {render}             from 'react-dom';
import { AppContainer }     from 'react-hot-loader';
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
import Root from './Root';

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

/* eslint-disable no-process-env */
// if (process.env.NODE_ENV !== 'production') {
//   // eslint-disable-next-line no-unused-vars,react/no-deprecated
//   let createClass = React.createClass;
//   Object.defineProperty(React, 'createClass', {
//     set: (nextCreateClass) => {
//       createClass = nextCreateClass;
//     }
//   });
//   // eslint-disable-next-line global-require
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }
/* eslint-enable no-process-env */

const renderApp = RootComponent => {
  render(
    <AppContainer>
      <RootComponent />
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
