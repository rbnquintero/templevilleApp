import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

var Header = require('../common/Header')

/* REDUX */
var { connect } = require('react-redux');
var {
  loadOracion,
  oracionRendered,
} = require('../../actions');

class Oracion extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title="Pedidos de oración"
          leftItem={{
            layout: 'icon',
            title: 'Menu',
            icon: {uri:'hamburger'},
            onPress: this.props.openDrawer,
          }}/>
          <Text>Sample page</Text>
      </View>
    );
  }
}

function select(store) {
  return {
    fb: store.oracionReducer,
  };
}

function actions(dispatch) {
  return {
    loadOracion: () => dispatch(loadOracion()),
    oracionRendered: () => dispatch(oracionRendered()),
  };
}

module.exports = connect(select, actions)(Oracion);
