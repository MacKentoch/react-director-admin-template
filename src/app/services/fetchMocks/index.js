import { appConfig }    from '../../config';
import {
  earningGraphMockData,
  userInfosMockData,
  teamMatesMock
}                       from '../../models';

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

export const fetchMockUserInfosData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve({...userInfosMockData}),
       timeToWait
     );
    }
 );
};

export const fetchMockTeamMatesData = (timeToWait = appConfig.FAKE_ASYNC_DELAY) => {
  return new Promise(
    resolve => {
      setTimeout(
       () => resolve([...teamMatesMock]),
       timeToWait
     );
    }
 );
};
