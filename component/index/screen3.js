import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Screen3',
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { /* other code from before here */ }

                <Text>Screen3</Text>
            </View>
        );
    }
}