'use strict'

var { combineReducers } = require('redux');

const reducers = combineReducers({
  appReducer: require('./appReducer'),
  navReducer: require('./navReducer'),
  newsReducer: require('./newsReducer'),
  facebookReducer: require('./facebookReducer'),
});

export default reducers;
