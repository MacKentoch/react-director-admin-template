// @flow weak

import axios  from 'axios';

export const FETCH_MOCK = 'FETCH_MOCK';
export const FETCH      = 'FETCH';
//
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//

// FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get',  // lower case, one of 'get', 'post'...
//    headers: {}     // OPTIONAL CONTENT like: data: { someprop: 'value ...}
//    options: {}     // OPTIONAL CONTENT like: Authorization: 'Bearer _A_TOKEN_'
//  }
// }
//
//
//
//
const fetchMiddleware = store => next => action => {
  if (!action.fetch) {
    return next(action);
  }

  if (!action.fetch.type ||
      !action.fetch.type === FETCH_MOCK ||
      !action.fetch.type === FETCH) {
    return next(action);
  }

  if (!action.fetch.actionTypes) {
    return next(action);
  }

  /**
   * fetch mock
   * @type {[type]}
   */
  if (action.fetch.type === FETCH_MOCK) {
    if (!action.fetch.mockResult) {
      throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
    }

    const {
      actionTypes: {request, success},
      mockResult
    } = action.fetch;

    // request
    store.dispatch({ type: request });

    // received successful for mock
    return Promise.resolve(
      store.dispatch({
        type:     success,
        payload:  mockResult
      })
    );
  }

  if (action.fetch.type === FETCH) {
    const {
      actionTypes: {request, success, fail},
      url,
      method,
      headers,
      options
    } = action.fetch;

    // request
    store.dispatch({ type: request });

    // fetch server (success or fail)
    // returns a Promise
    return axios.request({
      method,
      url,
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Acces-Control-Allow-Origin': '*',
        ...headers
      },
      ...options
    })
      .then(data => store.dispatch({type: success, payload: data}))
      .catch(
        err => {
          store.dispatch({type: fail, error: err});
          return Promise.reject(err);
        }
      );
  }
  return next(action);
};

export default fetchMiddleware;
