'use strict';

import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';

// var styles = require('styles');

export default class AppButton extends Component {
	props: {
    	title: string,
  	};

  	static propTypes = {
  		title: React.PropTypes.string.isRequired,
	}

  	render() {
  		const {
      		title,
    	} = this.props;

    	return (
        	<Container>
                <Content>
                    <Button 
                    	block 
                    	large> {title} </Button>
                </Content>
            </Container>
    	);
  	}
}