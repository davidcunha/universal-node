import merge from 'lodash/merge';

/**
 /* Load state from local storage
 /* Used as an alternative to dependencies like redux-persist
*/
export const loadState = (initialState) => {
  if (process.browser) {
    const serializedState = localStorage.getItem('state');
    if (serializedState !== null) {
      const deserializedState = JSON.parse(serializedState);
      return merge({}, initialState, deserializedState);
    }
  }
  return {};
};

/**
 /* Load state specific item from local storage
 /* Used as an alternative to dependencies like redux-persist
*/
export const loadStateItem = (key) => {
  if (process.browser) {
    const serializedState = localStorage.getItem('state');
    if (serializedState !== null) {
      const deserializedState = JSON.parse(serializedState);
      return deserializedState[key];
    }
  }
  return {};
};

/**
 /* Save state to local storage
 /* Used as an alternative to dependencies like redux-persist
*/
export const saveState = (state, key = '') => {
  if (process.browser) {
    const serializedState = JSON.parse(localStorage.getItem('state'));

    if (key) {
      serializedState[key] = state;
      localStorage.setItem('state', JSON.stringify(serializedState));
    } else {
      localStorage.setItem(
        'state',
        JSON.stringify(merge({}, state, serializedState)),
      );
    }
  }
};

/**
 /* Reset state from local storage
*/
export const resetState = (initialState) => {
  if (process.browser) {
    localStorage.setItem('state', JSON.stringify(initialState));
  }
};
