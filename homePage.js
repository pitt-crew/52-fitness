'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  ListView,
  ScrollView,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';
import { Container, Header, List, Title, Content, Badge, Button, Icon, Text, Footer, FooterTab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import appTheme from './app/themes/52fitnessTheme';
import AppButton from './app/components/Button/Button';
import WorkoutBox from './app/components/WorkoutBox';
import AppFooter from './app/components/Footer';
var workoutData = require('./app/data/workouts');

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#329F9F',
  },
   gridList: {
    flex: .7,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  footer: {
    flex: 3,
  }
});

class homePage extends Component {
    constructor(props) {
      super(props);

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var dataArr = workouts.map(function(item) {
        return { workoutID: item.workoutID,
                 workoutName: item.workoutName };
      });

      this.state = {
        dataSource: ds.cloneWithRows(dataArr),
      };

    }
    render() {
      return (
        <Container theme={appTheme} style={styles.container}> 
          <Header style={styles.header}>
          </Header>

          <Content>

              <ListView contentContainerStyle={styles.gridList}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>  <WorkoutBox name={rowData.workoutName}/>}
              /> 

          </Content>

        {/*Componrent version of footer not working*/}
        {/*<AppFooter></AppFooter>*/}
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

        </Container>
        
      );
    }
}

  //allows login page use in other files
  module.exports = homePage;