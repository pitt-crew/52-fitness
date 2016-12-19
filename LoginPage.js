'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppButton from './app/components/Button';
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
    alignItems: 'center',
    // backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#6c6d6f',

  },
  inputIcon: {
    marginTop: 15,
    color: '#6c6d6f'
  },
  textInput: {
    padding: 4,
    height: 30,
    marginTop: 5,
    marginRight: 5,
    flex: 1,
    width: 20,
    fontSize: 18,
    color: '#000'
  }
});

class LoginPage extends Component {
  	render() {
    	return (
	      <View style={styles.container}>
	        <Text style={styles.description}>
	          Welcome
	        </Text>
          <Text style={styles.description}>
            to 52 Fitness
          </Text>
          <View style={styles.inputContainer}>
            <Icon style={styles.inputIcon} name="user-circle" />
            <TextInput
              style={styles.textInput}
              autoCorrect="false"
              placeholder='Username' />
          </View>
          <View style={styles.inputContainer}>
            <Icon style={styles.inputIcon} name="lock" />
            <TextInput
              style={styles.textInput}
              secureTextEntry="true"
              placeholder='Password' />
          </View>
          <View>  
            <Button 
              title="Login"
              color="#000"
              accessibilityLabel="Learn more about this purple button" />
          </View>
          <View>
            <Text>Or Register Here</Text>
          </View>
	        
	      </View>	
    	);
  	}
}

  //allows login page use in other files
  module.exports = LoginPage;