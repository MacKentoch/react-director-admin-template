// @flow

// to avoid: Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
import 'raf/polyfill';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
