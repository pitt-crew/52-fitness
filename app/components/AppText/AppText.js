import React, { Component } from 'react';
import { Text } from 'react-native';

class AppText extends Component {
  render() {
    return (
    	<AppText>
	      <View>
	        <Text></Text>
	      </View>
	    </AppText>
    );
  }
}

ReactNative.AppRegistry.registerComponent('AppText', () => AppText);