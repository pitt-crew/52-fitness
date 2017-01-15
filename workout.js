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
import { Container, Header, Title, Content, Card, CardItem, DeckSwiper, Footer, FooterTab, Badge, Button, InputGroup, Input, Icon, H1, H2, H3, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import appTheme from './app/themes/52fitnessTheme';
import AppButton from './app/components/Button/Button';
/*Add any other components that we need on this screen here*/

const deck = [
  {
    text: '14 Pushups!',
    image: require('./app/images/queen_of_hearts.png')
  },
  {
    text: '2 Squats!',
    image: require('./app/images/2_of_clubs.png')
  }
]
class workout extends Component {
  	render() {
    	return (
        <Container theme={appTheme}>
          <Header>
          </Header>

          <Image source={require('./app/images/backgrounds/lodyas.png')}
              style={styles.workoutBackground} >

          <Content>
            <DeckSwiper
              dataSource={deck}
              renderItem={item =>
                <View>
                  <Card style={styles.card}>
                  <CardItem style={styles.playingCard}>
                  <Image source={item.image} style={styles.playingCardImage}>

                  </Image>
                  </CardItem>


                  </Card>
                  <Text style={styles.playingCardDescription}>
                  {item.text}
                  </Text>
                </View>
              }/>
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
    marginLeft: 25,
    marginRight: 29,
    paddingLeft: 6.5,
    justifyContent: 'center'
  },
  playingCard: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  playingCardImage: {
    width: 310,
    height: 450,
    resizeMode: 'contain',
  },
  playingCardDescription: {
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 20,
    color: '#11FF05',
  },
  workoutBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

  //allows login page use in other files
  module.exports = workout;
