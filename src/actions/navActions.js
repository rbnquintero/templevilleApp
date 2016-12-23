/*
 * action types
 */
const PANTALLA_NOTICIAS = 'PANTALLA_NOTICIAS';
const PANTALLA_CREENCIAS = 'PANTALLA_CREENCIAS';
const PANTALLA_NOSOTROS = 'PANTALLA_NOSOTROS';

/***********************/
/**     PANTALLAS     **/
/***********************/
function toNoticias() {
  return {
    type: PANTALLA_NOTICIAS
  }
}

function toCreencias() {
  return {
    type: PANTALLA_CREENCIAS
  }
}

function toNosotros() {
  return {
    type: PANTALLA_NOSOTROS
  }
}

module.exports = {toNoticias, toCreencias, toNosotros}
