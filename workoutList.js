'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';
import { Container, Header, name, Content, Footer, FooterTab, Badge, Button, InputGroup, Input, Icon, H1, H2, H3, List, ListItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import appTheme from './app/themes/52fitnessTheme';
import AppButton from './app/components/Button/Button';
import WorkoutItem from './app/components/WorkoutItem';
var homePage = require('./homePage');
var workout = require('./workout')
/*Add any other components that we need on this screen here*/

var styles = StyleSheet.create({
  loginContainer: {
    // padding: 5,
    // marginTop: 65,
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  landingBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  listContainer: {
    backgroundColor: '#fff'
  }
});

class workoutList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          workouts: [
          {
            title: 'Lower Body'
          },
          {
            title: 'Core'
          },
          {
            title: 'MMA'
          }]
      };
    };

    _handleBackPress() {
      this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
      this.props.navigator.push(nextRoute);
    }
  	render() {
      const nextRoute = {
          component: workout,
          title: 'Workout',
          passProps: { myProp: 'bar' }
      };

      let Arr = this.state.workouts.map(a => {
        return <WorkoutItem name={a.title}/>
      })
    	return (
        <Container theme={appTheme} style={styles.container}>
          <Header>
          </Header>

           <Image source={require('./app/images/backgrounds/lodyas.png')}
               style={styles.landingBackground} >

          <Content>

            <List style={styles.listContainer}>
                <ListItem onPress={() => this._handleNextPress(nextRoute)}>
                    <Text>Upper Body</Text>
                </ListItem>
                {Arr}

            </List>

          </Content>
          </Image>

          <Footer>
              <FooterTab>
                  <Button transparent>
                      Home
                      <Icon name='ios-home' />
                  </Button>
                  <Button>
                    Browse
                      <Icon name='ios-list active' />
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


        </Container>
    	);
  	}
}

  //allows login page use in other files
  module.exports = workoutList;
