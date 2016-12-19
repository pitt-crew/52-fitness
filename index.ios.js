/**
 * 52 Fitness app
 * Authors: Ryan Walter and Mike DeAngelis
 * Contact Info: xxx
 * 
 */

var React = require('react');
var ReactNative = require('react-native');
var LoginPage = require('./LoginPage');

/*Add any other components that we need on this screen here*/

var styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class fiftytwofitness extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '52 Fitness',
          component: LoginPage
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('fiftytwofitness', () => fiftytwofitness);
