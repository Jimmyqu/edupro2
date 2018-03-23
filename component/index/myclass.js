import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import utils from "../common/utils";

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '公开课程',
    });

    render() {
        return (
            <View >
                <TouchableOpacity
                    style={{backgroundColor:'#fff',marginTop:5}}
                    onPress={() => this.props.navigation.navigate('openClass',{ type: '公开课'})}
                >
                    <View style={styles.class_item}>
                        <Image
                            resizeMode="cover"
                            blurRadius={1}
                            style={{width:80,height:70,}}
                            source={require('../img/logo.png')}
                            // defaultSource={require('../static/img/1.jpg')} //IOS 安卓无
                        />
                        <View style={styles.item_r}>
                            <Text style={styles.item_r_title}>心理公开课</Text>
                            <Text
                                numberOfLines={2}
                                style={styles.item_r_content}
                            >
                                吾尝终日而思矣15，不如须臾之所学16也；吾尝跂17而望矣，不如登高之博见18也。登高而招19，臂非加长也，而见者远20；顺风而呼，声非加疾21也，而闻者彰22。假舆马者23，非利足也24，而致
                            </Text>

                            <View style={styles.class_item_span}>
                                <Icon
                                    style={{color:"#5eae00"}}
                                    name="map-marker"
                                    size={15}
                                />
                                <Text
                                    style={styles.class_item_span_content}
                                >
                                    1楼102
                                </Text>
                            </View>
                            <View style={styles.class_item_span}>
                                <Icon style={{color:"#5eae00"}} name="clock-o" size={15}/>
                                <Text
                                    style={styles.class_item_span_content}
                                >
                                    2018-03-07  09:30
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    public_class:{
        paddingTop:10,
    },
    title:{
        paddingLeft:15,
        fontSize:utils.style.FONT_SIZE_TITLE,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5
    },
    class_item:{
        flexDirection:'row',
        paddingTop:15,
        paddingLeft:18,
        paddingBottom:15
    },

    item_r:{
        paddingRight:80,
        paddingLeft:15,
    },
    item_r_title:{
        fontSize:utils.style.FONT_SIZE,
        fontWeight:'bold'
    },
    item_r_content:{
        fontSize:utils.style.FONT_SIZE_SMALL,
    },
    class_item_span:{
        flexDirection:'row',
        marginRight:10,
        marginTop:2
    },
    class_item_span_content:{
        fontSize:utils.style.FONT_SIZE_SMALLER,
        marginLeft:5,

    },
    schedule_item:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10
    },
    schedule_item_container:{
        marginTop:5,
        backgroundColor:'#f4fdec',
        borderRadius:5,
    },
    schedule_item_title:{
        flexDirection:"row"
    },
    title_l:{
        flex:1,
        textAlign:'center',
        lineHeight:30,
        backgroundColor:'#0d8ccf',
        fontSize:15,
        borderRadius:5,
        height:30,
        marginRight:5
    },
    title_r:{
        flex:2,
        textAlign:'center',
        backgroundColor:'#cbcdcc',
        fontSize:13,
        borderRadius:5,
        height:30,
        lineHeight:30,
    },
    schedule_item_content:{
        fontSize:12,
        paddingRight:5,
        paddingLeft:5,
        paddingTop:10
    },
    icon_container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:5,
        marginBottom:5
    }


});