'use strict';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
 
var styles = StyleSheet.create({
    
    gridItem: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        width: 150,
        height: 150,
        shadowColor: '#dedede',
        shadowOffset: {width: 5, height: 5}, 
        shadowOpacity: 1,
        shadowRadius: 3
    },
    gridTitle: {
        textAlign: 'center',
        fontFamily: 'CardCharactersNarrowFigures'
    }

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
            <TouchableHighlight style={styles.gridItem}>
                <View>
                    <Text style={styles.gridTitle}>{name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
