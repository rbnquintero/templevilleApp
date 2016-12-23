import React, { Component } from 'react'
import {
  Text,
  View,
  WebView,
} from 'react-native'

var Header = require('../common/Header')

class Nosotros extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title="Nosotros"
          leftItem={{
            layout: 'icon',
            title: 'Menu',
            icon: require('image!hamburger'),
            onPress: this.props.openDrawer,
          }}/>
        <Text>nosotros</Text>
      </View>
    );
  }
}

module.exports = Nosotros
