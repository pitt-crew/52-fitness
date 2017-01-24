'use strict';
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
 
var styles = StyleSheet.create({
});

export default class WorkoutBox extends Component {
    props: {
      name: string,
    };

    static propTypes = {
      name: React.PropTypes.string.isRequired,
    }
    render() {
        const {
            name,
        } = this.props;

        return (
                <Card>
                    <CardItem>
                        {/*<Thumbnail source={require('./img/NB-logo.png')} />*/}
                        <Text style={{fontFamily: 'CardCharactersNarrowFigures'}}>{name}</Text>
                        <Text note>Creator</Text>
                    </CardItem>

                    <CardItem>                        
                        {/*<Image style={{ resizeMode: 'cover', width: null }} source={require('./img/card-image.png')} />*/}
                    </CardItem>

                    <CardItem>
                        <Button transparent>
                            <Icon name="ios-star-outline" size={20} color="#4F8EF7" />
                            1,926
                        </Button>                       
                    </CardItem>
               </Card>
        );
    }
}
