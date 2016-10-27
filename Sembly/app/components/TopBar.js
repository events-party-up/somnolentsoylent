import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
// <Text style={styles.menu}>Menu</Text>
export default class TopBar extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.showNavMenu}>
          <Icon name='menu' style={styles.content}></Icon>
        </TouchableOpacity>
        <Text style={styles.logo}>Sembly</Text>
        <TouchableOpacity>
          <Icon name='filter-list' style={styles.content}></Icon>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 40,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center'
  },
  content: {
    fontSize: 22,
    color: 'white',
  },
  logo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  loginButton: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    justifyContent: 'center'
  }

});
