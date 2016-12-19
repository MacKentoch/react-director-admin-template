const objectHasProperty = Object.prototype.hasOwnProperty;
const jsonStringify = JSON.stringify;
const jsonParse = JSON.parse;
/*
    localStorageManager middleware (READ or WRITE to localStorage)
      -> does not delete: do it on your own

    dispatch an action with "permanentStore" object :

    permanentStore: {
      required: [boolean]     -> REQUIRED,
      storeKey: [string]      -> REQUIRED
      storeValue: [string]    -> REQUIRED | if write should be suppplied by a value to write || if read will be suppplied by middleware with value
      ReadOrWrite: [boolean]  -> REQUIRED | false is READ storage and true is WRITE to storage
    }
 */
/* eslint-disable no-unused-vars */
export const localStorageManager = store => next => action => {
  // if action contains a "permanentStore" object property: middleware localStorage should be required
  if (action && action.permanentStore && isPermanentStoreActive(action.permanentStore)) {
    const permanentStore = action.permanentStore;
    if (permanentStore.required) {
      const key = permanentStore.storeKey;
      const value = permanentStore.storeValue;

      if (permanentStore.ReadOrWrite) {
        // write to localStorage
        localStorage.setItem(key, jsonStringify(value));
        next({ ...action, permanentStore: {...permanentStore} });
      } else {
        // read localStorage and set action.permanentStore.value to read value from localStorage
        permanentStore.storeValue = jsonParse(localStorage.getItem(key));
        next({ ...action, permanentStore: {...permanentStore} });
      }
    } else {
      // permanent storage not needed in this action:
      next(action);
    }
  } else {
    next(action);
  }
};
/* eslint-enable no-unused-vars */

/*
    localStorageManager middleware helpers
 */


// permanentStore validation helper
function isPermanentStoreActive(object) {
  if (isPermanentStoreObject(object)) {
    return object.required;
  }
  return false;
}
// permanentStore validation helper
function isPermanentStoreObject(object) {
  if (
      object &&
      objectHasProperty.call(object, 'required') && typeof object.required === 'boolean' &&
      objectHasProperty.call(object, 'storeKey') && typeof object.storeKey === 'string' && storeKeyIsValid(object.storeKey) &&
      objectHasProperty.call(object, 'storeValue') &&
      objectHasProperty.call(object, 'ReadOrWrite') && typeof object.ReadOrWrite === 'boolean'
     ) {
    return true;
  }
  return false;
}
// permanentStore validation helper
function storeKeyIsValid(storeKey = '') {
  if (storeKey && storeKey.trim().length > 0) {
    return true;
  } else {
    return false;
  }
}
