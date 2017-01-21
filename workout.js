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
          exercises: {
            a: 'Pushups',
            b: 'Sit-ups',
            c: 'Pull-ups',
            d: 'Flutter-kicks'
          }
      };

      this.deck = this.makeDeck();
      this.deck = this.shuffle(this.deck)
    }

    textify(text) {
      let result;

      if(text === 'ace') {
        result = 'Fourteen';
      } else if(text === 'jack') {
        result = 'Eleven';
      } else if(text === 'queen') {
        result = 'Twelve';
      } else if(text === 'king') {
        result = 'Thirteen';
      } else {
        text = text.charAt(0).toUpperCase() + text.slice(1);
        result = text;
      }
      return result;
    };

    makeDeck() {
      const ranks = new Array("ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                    "jack", "queen", "king");
      const suits = new Array(["Clubs", this.state.exercises.a], ["Diamonds", this.state.exercises.b], ["Hearts", this.state.exercises.c], ["Spades", this.state.exercises.d]);

      let deck = [];
      let card;
      let rank;

      for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < ranks.length; j++) {
          card = ranks[j] + suits[i][0]
          rank = this.textify(ranks[j])
          deck.push({
            text: rank + " " + suits[i][1],
            image: images.deck[card]
          })
        }
      }
      return deck;
    };

    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
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
