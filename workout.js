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
import images from './app/config/images';
/*Add any other components that we need on this screen here*/

class workout extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      // this.deck = [{
      //   text: '2 pushups',
      //   image: require('./app/images/2_of_clubs.png')
      // },{
      //   text: '20 pushups',
      //   image: require('./app/images/king_of_clubs.png')
      // }];
      this.deck = this.makeDeck();

    }

    // componentWillMount() {
    //   this.makeDeck();
    // }

    makeDeck() {
      const ranks = new Array("ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                    "jack", "queen", "king");
      const suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");

      let deck = [];
      let card;

      for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < ranks.length; j++) {
          card = ranks[j] + suits[i]
          deck.push({
            text: '' + ranks[j] + ' Pushups',
            image: images.deck[card]
          })
        }
      }
      return deck;
    }

  	render() {

    	return (
        <Container theme={appTheme}>
          <Header>
          </Header>

          <Image source={require('./app/images/backgrounds/lodyas.png')}
              style={styles.workoutBackground} >

          <Content>
            <DeckSwiper
              dataSource={this.deck}
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
    paddingTop: 25,
    color: '#11FF05',
  },
  workoutBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

  //allows workout page use in other files
  module.exports = workout;
