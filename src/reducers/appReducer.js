'use strict';

//Declaramos el type State
export type State = {
  initialized: boolean;
};

const initialState = {
  initialized: false,
};

function app(state: State = initialState, action): State {
  if (action.type === 'APP_RAW') {
    return initialState;
  } else if (action.type === 'APP_INITIALIZING') {
    return {
      initialized: false,
    }
  } else if (action.type === 'APP_UPTODATE') {
    return {
      initialized: true,
    }
  }
  return state;
}

module.exports = app;
