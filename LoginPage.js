'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

/*Add any other components that we need on this screen here*/

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class LoginPage extends Component {
  	render() {
    	return (
	      <View style={styles.container}>
	        <Text style={styles.description}>
	          This is a login page.
	        </Text>
	        
	      </View>	
    	);
  	}
}

  //allows login page use in other files
  module.exports = LoginPage;