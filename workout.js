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
import { Container, Header, Title, Content, Card, CardItem, Footer, FooterTab, Badge, Button, InputGroup, Input, Icon, H1, H2, H3, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import appTheme from './app/themes/52fitnessTheme';
import AppButton from './app/components/Button/Button';
/*Add any other components that we need on this screen here*/

class workout extends Component {
  	render() {
    	return (
        <Container theme={appTheme}>
          <Header>
          </Header>

          <Image source={require('./app/images/backgrounds/lodyas.png')}
              style={styles.workoutBackground} >

          <Content>
            <Card>
              <CardItem style={styles.card}>
                <Image source={require('./app/images/queen_of_hearts.png')} style={styles.playingCard}>

                </Image>
              </CardItem>

              <CardItem style={styles.playingCardDescription}>
                <H1>14 Pushups!</H1>
              </CardItem>
            </Card>
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
        </Container>
    	);
  	}
}

var styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  playingCard: {
    width: 310,
    height: 450,
    resizeMode: 'contain',
  },
  playingCardDescription: {
    alignItems: 'center',
  },
  workoutBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

  //allows login page use in other files
  module.exports = workout;
