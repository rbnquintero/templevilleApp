'use strict'

const appActions = require('./appActions');
const navActions = require('./navActions');
const newsActions = require('./newsActions');
const facebookActions = require('./facebookActions');

module.exports = {
  ...appActions,
  ...navActions,
  ...newsActions,
  ...facebookActions,
};
