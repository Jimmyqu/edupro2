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
        title: 'Screen1',
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { /* other code from before here */ }
                <Text>Screen1</Text>
                <Button
                    title="Go to 2"
                    onPress={() => this.props.navigation.navigate('screen2')}
                />
            </View>
        );
    }
}