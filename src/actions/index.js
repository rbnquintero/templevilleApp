'use strict'

const appActions = require('./appActions');
const navActions = require('./navActions');
const newsActions = require('./newsActions');

module.exports = {
  ...appActions,
  ...navActions,
  ...newsActions,
};
