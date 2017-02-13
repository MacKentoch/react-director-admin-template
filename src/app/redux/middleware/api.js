import {
  getLocationOrigin,
  checkStatus,
  parseJSON
}                     from '../../services';

const BASE_URL = getLocationOrigin();

export const CALL_API = Symbol('Call API');

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (!callAPI) {
    return next(action);
  }

  const { url, types, authenticated, options } = callAPI;
  const [ requestType, successType, errorType ] = types;

  store.dispatch({type: requestType});
  
  return callApi(url, options, authenticated)
          .then(
            response => next({
              type: successType,
              response,
              authenticated
            }
          )
          .catch(
            error => next({
              type: errorType,
              error: error.message || 'There was an error.'
            })
          )
        );
};

function callApi(url, options = {}, authenticated = false) {
  // add token to options headers props if authenticated:
  const fullOptions = authenticated === true
    ? addTokenToHeadersOptions(options) // if error occurs can be null
    : { ...options };

  // fullOptions cannot be null or undefined except error occured in addTokenToHeadersOptions()
  if (fullOptions) {
    // fetch:
    return fetch(BASE_URL + url, fullOptions)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => error);
  } else {
    return Promise.reject('Authentication needed but no token found');
  }
}

function addTokenToHeadersOptions(options) {
  const token = localStorage.getItem('id_token') || null;

  if(token) {
    if (!optionsHasHeadersProp(options)) {
      // add headers to options :
      return {
        ...options,
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    } else {
      // options already have headers so just add Authorization:
      return {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`
        }
      };
    }
  } else {
    // throw new Error('No token saved!');
    /* eslint-disable no-console */
    console.error('No token saved!');
    /* eslint-enable no-console */
    return null;
  }
}

function optionsHasHeadersProp(options) {
  return Object.prototype.hasOwnProperty.call(options, 'headers');
}
