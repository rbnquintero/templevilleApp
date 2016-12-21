import React, { Component } from 'react';

var TemplevilleApp = require('./TemplevilleApp');

var { createStore, applyMiddleware } = require('redux');
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducers from './reducers';

var { Provider } = require('react-redux');

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, promise, logger));

var Parse = require('parse/react-native')
Parse.initialize("HPry3wMRFE8fulZJQmvpbSAAPRJSgpMOpiDr5GqB", "kwEYlmoTBP98IqHgDbXaH3ZOyQnTi1kKafRCxjLk");
Parse.serverURL = 'https://parseapi.back4app.com/'

class Setup extends Component {
  render() {
    return (
        <Provider store={store}>
          <TemplevilleApp />
        </Provider>
    );
  }
}

module.exports = Setup;
