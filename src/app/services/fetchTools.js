'use strict';

import { Base64 } from 'js-base64';


export const defaultOptions = {
  credentials: 'same-origin'
};

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(status.statusText);
    error.response = response;
    throw error;
  }
};


export const parseJSON = (response) => {
  return response.json();
};

export const getLocationOrigin = () => {
  if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
  }
  return window.location.origin;
};

export const encodeBase64 = (stringToEncode) => {
  return Base64.encode(stringToEncode);
};
