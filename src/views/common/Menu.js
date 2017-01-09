import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

/* REDUX */
import type {State as Navigation} from '../../reducers/navReducer';
var { connect } = require('react-redux');
var {
  toNoticias,
  toNosotros,
  toCreencias,
} = require('../../actions');
type Props = {
  nav: Navigation;
  toNoticias: () => void;
  toCreencias: () => void;
  toNosotros: () => void;
};

class Menu extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <View style={{backgroundColor:'rgb(75,32,127)', flex:1, paddingVertical:20}}>
            <View style={{alignItems:'center', marginVertical:10}}>
              <Image source={{uri:'logo'}} style={{resizeMode:'contain', height:90, width:90}}/>
            </View>
            <Text style={{fontFamily:'Oswald', color:'white', textAlign:'center', fontSize:16}}>
              TEMPLEVILLE SPANISH SDA CHURCH
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {this.props.closeDrawer(); this.props.toNoticias();}}>
          <View style={{backgroundColor:'#fbf9f3', flex:1, margin:3}}>
            <Text style={styles.welcome}>
              Noticias
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {this.props.closeDrawer(); this.props.toNosotros();}}>
          <View style={{backgroundColor:'#fbf9f3', flex:1, margin:3}}>
            <Text style={styles.welcome}>
              ¿Quienes somos?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {this.props.closeDrawer(); this.props.toCreencias();}}>
          <View style={{backgroundColor:'#fbf9f3', flex:1, margin:3}}>
            <Text style={styles.welcome}>
              Creencias Adventistas
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efe9d7',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Merriweather',
    color: 'rgb(75,32,127)',
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
    nav: store.navReducer,
  };
}

function actions(dispatch) {
  return {
    toNoticias: () => dispatch(toNoticias()),
    toCreencias: () => dispatch(toCreencias()),
    toNosotros: () => dispatch(toNosotros()),
  };
}

module.exports = connect(select, actions)(Menu);
