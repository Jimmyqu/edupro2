import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView
} from 'react-native';

import utils from "../common/utils";

const width = utils.size.width;

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '公告详情',
    });
    render() {
        const { params } = this.props.navigation.state;

        const Y=(new Date(params.createTime).getFullYear())
        const M=(new Date(params.createTime).getMonth()+1)
        const D=(new Date(params.createTime).getDate()+1)
        const timer=Y+"-"+M+"-"+D  // 时间戳转时间
        return (
            <ScrollView >
                <Image
                    style={{width:width,height:200,}}
                    source={{uri:params.url}}
                />
                <View>
                    <Text style={styles.news_title}>{params.title}</Text>
                    <Text style={styles.news_time}>{timer}</Text>
                    <View style={styles.detail_container}>
                        <Text style={styles.news_detail}>
                            {params.content}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    news_title:{
        marginTop:20,
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'#000'
    },
    news_time:{
        fontSize:12,
        textAlign:'center',
        color:'#c9c9ca'
    },
    detail_container:{
        marginTop:20,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:50
    },
    news_detail:{
        fontSize:14,
        textAlign:'center',
        color:'#000'
    }


});