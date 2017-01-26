'use strict';
import React, { Component } from 'react';
import {  } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
 
export default class AppFooter extends Component {
    render() {
        return (
            <Footer style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
              <FooterTab>
                  <Button transparent>
                      Home
                      <Icon name='ios-home' />
                  </Button>
                  <Button>
                    Browse
                      <Icon name='ios-list' />
                  </Button>
                  <Button>
                    Search
                      <Icon name='ios-search' />
                  </Button>
                  <Button>
                    Add Workout
                      <Icon name='ios-add-circle' />
                  </Button>
              </FooterTab>
            </Footer>
        );
    }
}
