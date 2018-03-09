import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Screen2',
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { /* other code from before here */ }
                <Text>Screen2</Text>
                <Button
                    title="Go to 3"
                    onPress={() => this.props.navigation.navigate('screen3')}
                />
            </View>
        );
    }
}