'use strict';

import { appConfig }  from '../config';
import { earningGraphMockData }  from '../models';

export const fetchMockEarningGraphData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({
         labels: earningGraphMockData.labels,
         datasets: earningGraphMockData.datasets
       }),
       timeToWait
     );
    }
 );
};
