'use strict';

import React, { Component } from 'react';
import { ListItem, Text, Container, Content, Button } from 'native-base';

// var styles = require('styles');

export default class WorkoutItem extends Component {
	props: {
    	name: string,
  	};

  	static propTypes = {
  		name: React.PropTypes.string.isRequired,
	}

  	render() {
  		const {
      		name,
    	} = this.props;

    	return (
        	<ListItem> 
            <Text> {name} </Text>
          </ListItem>
    	);
  	}
}