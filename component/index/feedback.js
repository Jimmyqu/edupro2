import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import {Button,List, ListItem, Icon} from 'react-native-elements'
import utils from '../common/utils'
const width = utils.size.width;

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View >
                <Text style={{paddingLeft:15,fontSize:14,marginTop:20}}>问题描述或者建议:</Text>
                <View style={styles.math_detail}>
                    <TextInput
                        placeholder='请在此描述您遇到的问题或者建议'
                        underlineColorAndroid='transparent'
                        multiline = {true}
                        numberOfLines = {3}
                        style={{lineHeight:30, paddingLeft:15,fontSize:14}}>
                    </TextInput>

                </View>
                <Text style={{paddingLeft:15,fontSize:14,marginTop:20}}>联系方式:</Text>
                <View style={[styles.math_detail,{height:40}]}>
                    <TextInput
                        placeholder='请在此留下您的邮箱账号'
                        underlineColorAndroid='transparent'
                        numberOfLines = {1}
                        style={{ paddingLeft:15,fontSize:14}}>
                    </TextInput>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    math_detail:{
        width:width,
        backgroundColor:'#fff',
        marginTop:10,
        paddingRight:15,
        height:150
    },

});
