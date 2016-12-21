'use strict'

import { Platform } from 'react-native'

/*
 * action types
 */
const APP_RAW = 'APP_RAW'
const APP_INITIALIZING = 'APP_INITIALIZING'
const APP_UPTODATE = 'APP_UPTODATE'

/*
 * action creators
 */
function appSimpleState(state) {
  return {
    type: state,
  }
}

/***********************/
/**      COMMON       **/
/***********************/
function appInitialize() {
  return function(dispatch) {
    dispatch(appSimpleState(APP_INITIALIZING))
    return setTimeout(function(){
      dispatch(appSimpleState(APP_UPTODATE))
    }, 100)
  }
}

module.exports = {appInitialize}
