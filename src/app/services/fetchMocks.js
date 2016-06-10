'use strict';

import { appConfig }  from '../config';
import earningGraphMockData   from '../models';

export const fetchMockEarningGraphData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  let promise = new Promise(
    resolve => {
      setTimeout(
        () => resolve({ data: earningGraphMockData }),
        timeToWait
      );
    });
  return promise;
};
