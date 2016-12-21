import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/* REDUX */
import type {State as AppReducer} from './reducers/appReducer'
var {
  appInitialize,
} = require('./actions')
var { connect } = require('react-redux')
type Props = {
  app: AppReducer;
  appInitialize: () => void;
}

class TemplevilleApp extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(!this.props.app.initialized) {
      this.props.appInitialize()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function select(store) {
  return {
    app: store.appReducer,
  };
}

function actions(dispatch) {
  return {
    appInitialize: () => dispatch(appInitialize()),
  };
}

module.exports = connect(select, actions)(TemplevilleApp)
