// @flow

// #region singleton store
let store = {};
// #endregion

class LocalStorageMock {
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

const localStorage = new LocalStorageMock();

if (!window.localStorage) {
  window.localStorage = localStorage;
}

module.exports = localStorage;
