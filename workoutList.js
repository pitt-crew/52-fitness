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
    _handleBackPress() {
      this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
      this.props.navigator.push(nextRoute);
    }
  	render() {
      const nextRoute = {
          component: homePage,
          title: 'Home page!',
          passProps: { myProp: 'bar' }
      };
    	return (
        <Container theme={appTheme} style={styles.container}> 
          <Header>
          </Header>

           <Image source={require('./app/images/backgrounds/lodyas.png')} 
               style={styles.landingBackground} >

          <Content>

            <List style={styles.listContainer}>
                <ListItem onPress={() => this._handleNextPress(nextRoute)}>
                    <Text>Workout 1</Text>
                </ListItem>
                <WorkoutItem name="Workout 2" />
                <WorkoutItem name="Workout 3" />
                <WorkoutItem name="Workout 4" />
                <WorkoutItem name="Workout 5" />
                <WorkoutItem name="Workout 6" />
                <WorkoutItem name="Workout 7" />
                <WorkoutItem name="Workout 8" />
                <WorkoutItem name="Workout 9" />
                <WorkoutItem name="Workout 10" />
                <WorkoutItem name="Workout 11" />
                <WorkoutItem name="Workout 12" />
                <WorkoutItem name="Workout 13" />
                <WorkoutItem name="Workout 14" />
                <WorkoutItem name="Workout 15" />
                <WorkoutItem name="Workout 16" />

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