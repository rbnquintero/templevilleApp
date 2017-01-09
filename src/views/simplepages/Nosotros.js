import React, { Component } from 'react'
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
} from 'react-native'

var Header = require('../common/Header')
var SegmentoMapa = require('../common/SegmentoMapa')

class Nosotros extends Component {

  handleClick(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          title="¿Quienes somos?"
          leftItem={{
            layout: 'icon',
            title: 'Menu',
            icon: {uri:'hamburger'},
            onPress: this.props.openDrawer,
          }}/>
        <Text style={styles.welcome}>Templeville Spanish SDA Church</Text>
        <TouchableOpacity onPress={() => this.handleClick('http://templevillespanishmd.adventistchurch.org/')}><Text style={styles.text}>http://templevillespanishmd.adventistchurch.org/</Text></TouchableOpacity>
        <Text style={styles.text}>Welcome to the Templeville Spanish SDA Church in Marydel, MD. We are a Christian community and would love to have you join our family. To learn more about what we believe you can visit our About Us page. Please join us for Bible study, worship, and prayer.</Text>
        <SegmentoMapa latitud={'39.1356326'} longitud={'-75.7710543'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Merriweather',
    color: 'rgb(75,32,127)',
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Merriweather',
    color: 'rgb(75,32,127)',
    margin: 10,
  },
});

module.exports = Nosotros
