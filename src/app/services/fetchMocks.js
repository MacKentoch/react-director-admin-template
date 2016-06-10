'use strict';

import { appConfig }  from '../config';
import earningGraphMockData   from '../models';

export const fetchMockEarningGraphData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  setTimeout(
    () => Promise.resolve({ data: earningGraphMockData }),
    timeToWait
  );
};
