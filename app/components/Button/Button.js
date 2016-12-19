'use strict';

import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

// var styles = require('styles');

class AppButton extends Component {
  render() {
    return (
        <TouchableHighlight>
        	<Text>I'm a button</Text>
		</TouchableHighlight>
    );
  }
}

  module.exports = AppButton;