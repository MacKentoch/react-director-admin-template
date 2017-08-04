// @flow

import type {
  Storage,
  TokenKey,
  UserInfoKey,
  STORES_TYPES
}                 from './type';
import decode     from 'jwt-decode';
import moment     from 'moment';


const TOKEN_KEY = 'token';
const USER_INFO = 'userInfo';

const APP_PERSIST_STORES_TYPES: Array<STORES_TYPES> = [
  'localStorage',
  'sessionStorage'
];

const parse     = JSON.parse;
const stringify = JSON.stringify;

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
export const auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getToken(
    fromStorage: Storage  = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY
  ): ?string {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return (localStorage && localStorage.getItem(tokenKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
    }
    // default:
    return null;
  },

  /**
  * set the token value into localstorage (managed by localforage)
  *
  * @param {string} [value=''] token value
  * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
  * @param {any} [tokenKey='token'] token key
  * @returns {boolean} success/failure flag
  */
  setToken(
    value: string = '', 
    toStorage: Storage = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY
  ): ?string {
    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
      }
    }
  },
  

  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to protected routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
   */
  isAuthenticated(
    fromStorage: Storage = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY
  ): boolean {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if ((localStorage && localStorage.getItem(tokenKey))) {
        return true;
      } else {
        return false;
      }
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if ((sessionStorage && sessionStorage.getItem(tokenKey))) {
        return true;
      } else {
        return false;
      }
    }
    // default:
    return false;
  },

  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate(
    encodedToken: string
  ): any {
    const token = decode(encodedToken);
    if (!token.exp) {
      return null;
    }

    // const date = new Date(0);
    // date.setUTCSeconds(token.exp);
    // return date;
    const expirationDate = moment(token.exp);
    return expirationDate;
  },

  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken(
    tokenKey: TokenKey = TOKEN_KEY
  ): boolean {
    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },


  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////
  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getUserInfo(
    fromStorage: Storage = APP_PERSIST_STORES_TYPES[0], 
    userInfoKey: UserInfoKey = USER_INFO
  ): ?string {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return (localStorage && parse(localStorage.getItem(userInfoKey))) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return (sessionStorage && parse(sessionStorage.getItem(userInfoKey))) || null;
    }
    // default:
    return null;
  },

  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
  setUserInfo(
    value = '', 
    toStorage = APP_PERSIST_STORES_TYPES[0], 
    userInfoKey = USER_INFO
  ): any {
    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },

  /**
   * delete userInfo
   *
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
  clearUserInfo(
    userInfoKey = USER_INFO
  ): any {
    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
    }
  },


  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage(): any {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};

export default auth;
