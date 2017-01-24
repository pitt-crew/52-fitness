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
import { Container, Header, List, Title, Content, Badge, Button, InputGroup, Input, Icon, H1, H2, H3, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import appTheme from './app/themes/52fitnessTheme';
import AppButton from './app/components/Button/Button';
import WorkoutBox from './app/components/WorkoutBox';
import AppFooter from './app/components/Footer';
var workoutData = require('./app/data/workouts');

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F5',
    flex: 1
  },
  header: {
    backgroundColor: '#329F9F',
  },
  gridList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gridItem: {
     backgroundColor: '#CCC',
     margin: 10,
     padding: 10,
     width: 150,
     height: 150
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
          <Content style={{flex: 1}}>

              <ListView contentContainerStyle={styles.gridList}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={styles.gridItem}>{rowData.workoutName}</Text>}
              /> 
            
              { /*<AppFooter/>*/ }
            
          </Content>




        </Container>
        
      );
    }
}

  //allows login page use in other files
  module.exports = homePage;