import { appConfig }  from '../../config';
import {
  defaultOptions,
  checkStatus,
  parseJSON,
  getLocationOrigin
}                     from '../fetchTools';

export const getUserInfoData = () => {
  const url = `${getLocationOrigin()}/${appConfig.userInfos.data.API}`;
  const options = {...defaultOptions};

  fetch(url, options)
  .then(checkStatus)
  .then(parseJSON)
  .then(data => data)
  .catch(error => error);
};
