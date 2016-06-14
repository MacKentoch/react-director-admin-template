'use strict';

import { appConfig }    from '../config';
import {
  earningGraphMockData,
  userInfoMockData
}                       from '../models';

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

export const fetchMockUserInfoData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...userInfoMockData}),
       timeToWait
     );
    }
 );
};
