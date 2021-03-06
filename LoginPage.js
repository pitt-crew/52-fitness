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
import { Container, Header, Title, Content, Footer, FooterTab, Badge, Button, InputGroup, Input, Icon, H1, H2, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import appTheme from './app/themes/52fitnessTheme';
import AppButton from './app/components/Button/Button';
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
  landingContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'column',
    flex: 1,
    color: '#fff'
  },
  textFieldGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'column',
    flex: 1
  },
   headerIcon: {
    fontSize: 150,
    color: '#6c6d6f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#6c6d6f',
  },
  inputIcon: {
    marginTop: 15,
    color: '#6c6d6f'
  },
  textInput: {
    padding: 4,
    height: 30,
    marginTop: 5,
    marginRight: 5,
    flex: 1,
    width: 20,
    fontSize: 18,
    color: '#000'
  }
});

class LoginPage extends Component {
  	render() {
    	return (
        <Container theme={appTheme} style={styles.container}> 
          <Header>
          </Header>

           <Image source={require('./app/images/backgrounds/lodyas.png')} 
               style={styles.landingBackground} >

          <Content>

            <Grid>

              <Row size={75} style={styles.landingContent}>
                <Icon style={styles.headerIcon} name="md-trophy" />
                  <H1>Welcome</H1>
                  <H2>to 52 Fitness</H2>
              </Row>

              <Row size={25} style={styles.textFieldGroup}>
                <InputGroup borderType='underline' >
                  <Icon name="ios-contact"></Icon>
                  <Input placeholder='Username' />
               </InputGroup>
               <InputGroup borderType='underline' >
                  <Icon name="md-lock"></Icon>
                  <Input secureTextEntry="true" placeholder='Password' />
               </InputGroup>
               <Button block>Log In</Button>
              </Row>

            </Grid>

          </Content>
          </Image>

          {/*<Content styles={styles.landingContent}>
            
          </Content>*/}

          {/*<Content>
            <View style={styles.inputContainer}>
              <Icon style={styles.inputIcon} name="user-circle" />
              <TextInput
                style={styles.textInput}
                autoCorrect="false"
                placeholder='Username' />
            </View>
            <View style={styles.inputContainer}>
              <Icon style={styles.inputIcon} name="lock" />
              <TextInput
                style={styles.textInput}
                secureTextEntry="true"
                placeholder='Password' />
            </View>
              <AppButton 
              title="Login here" />
          </Content>*/}

          {/*<Footer>
              <FooterTab>
                  <Button transparent>
                    Phone
                      <Icon name='ios-call' />
                  </Button>
                  <Button>
                    hello
                      <Icon name='ios-apps-outline' />
                  </Button>
                  <Button>
                      <Icon name='ios-camera-outline' />
                  </Button>
                  <Button active>
                      <Icon name='ios-compass' />
                  </Button>
                  <Button>
                      <Icon name='ios-contact-outline' />
                  </Button>
              </FooterTab>
          </Footer>*/}


        </Container>
    	);
  	}
}

  //allows login page use in other files
  module.exports = LoginPage;