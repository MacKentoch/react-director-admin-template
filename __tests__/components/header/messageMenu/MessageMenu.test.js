
'use strict';

import React          from 'react';
import MessageMenu    from '../../../../src/app/components/header/messageMenu/MessageMenu';
import renderer       from 'react-test-renderer';
// -------------------------------------------------
// no more needed image assets hack see package.json better solution:
// -------------------------------------------------
// "jest": {
//   "moduleNameMapper": {
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
//     "\\.(css|less|sass|scss)$": "identity-obj-proxy"
//   }
// }

// image assets hack for test:
// jest.mock(
//   '../../../../src/app/vendors/img/26115.jpg',
//   () => ''
// );
// jest.mock(
//   '../../../../src/app/vendors/img/avatar.png',
//   () => ''
// );

describe('MessageMenu component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MessageMenu />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
