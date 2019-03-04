// @flow

// #region singleton store
let store = {};
// #endregion

class SessionStorageMock {
  constructor() {
    store = {};
  }

  clear() {
    store = {};
  }

  getItem(key: string) {
    return store[key] || null;
  }

  setItem(key: string, value: string) {
    store[key] = value;
  }

  removeItem(key: string) {
    delete store[key];
  }
}

const sessionStorage = new SessionStorageMock();

if (!window.sessionStorage) {
  window.sessionStorage = localStorage;
}

module.exports = sessionStorage;
