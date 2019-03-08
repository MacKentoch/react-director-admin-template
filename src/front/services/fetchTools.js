// @flow

import { Base64 } from 'js-base64';

/*
  window.location.origin polyfill
 */
export const getLocationOrigin = () => {
  if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? ':' + window.location.port : ''}`;
  }
  return window.location.origin;
};

/*
  query options:
 */
export const defaultOptions = {
  credentials: 'same-origin',
};

export const postMethod = {
  method: 'POST',
};

export const jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

/*
  query response helpers:
 */
export const checkStatus = (response: {
  status: number,
  statusText: string,
  body: any,
  ...any,
}) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  return Promise.reject(error);
};

export const parseJSON = (response: any): any => {
  return response.json();
};

/*
 general helpers
 */
export const encodeBase64 = (stringToEncode: string): string => {
  return Base64.encode(stringToEncode);
};
