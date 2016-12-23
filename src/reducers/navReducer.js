'use strict';

//Declaramos el type State
export type State = {
  pantalla: ?string;
};

const initialState = {
  pantalla: 'noticias',
};

function navigation(state: State = initialState, action): State {
  if (action.type === 'PANTALLA_NOTICIAS') {
    return {
      pantalla: 'noticias',
    }
  } else if (action.type === 'PANTALLA_CREENCIAS') {
    return {
      pantalla: 'creencias',
    }
  } else if (action.type === 'PANTALLA_NOSOTROS') {
    return {
      pantalla: 'nosotros',
    }
  }

  return state;
}

module.exports = navigation;
