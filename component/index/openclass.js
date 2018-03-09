import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,ScrollView
} from 'react-native';

import {Button,List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import classRate from "./classRate";
import utils from '../common/utils'

const width = utils.size.width;
const my=[
    {
        name: 'Jimmy',
        avatar_url: 'http://imgs.aixifan.com/cms/2018_02_22/1519293027325.png?imageView2/1/w/520/h/256',
        subtitle: '15123456789'
    },
];
export default class math extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.type}`,
    });

    render() {
        return (
            <ScrollView style={{paddingBottom:20}}>
                { /* other code from before here */ }
                <Image
                    style={styles.img}
                    source={require('../img/math.png')}
                />

                <List containerStyle={{width:width*0.9,height:60,marginTop: 10, borderTopWidth: 0, borderBottomWidth: 0, borderBottomColor: '#cbd2d9',justifyContent:'center',marginLeft:width*0.05}}>
                    {
                        my.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatarStyle={{height:50,width:50,borderRadius:50}} avatarOverlayContainerStyle={{height:50,width:50,borderRadius:50}}
                                avatarContainerStyle={{height:50,width:50,borderRadius:50}}
                                avatar={{uri:l.avatar_url}}
                                subtitle={l.subtitle}
                                rightTitleStyle={{fontSize:12}}
                                containerStyle={{justifyContent:'center'}}
                                key={i}
                                title={l.name}
                                onPress={()=>this.props.navigation.navigate('classDetail')}
                            />
                        ))
                    }
                </List>
                <View style={styles.math_detail}>
                    <Text>{'       '}吾尝终日而思矣15，不如须臾之所学16也；吾尝跂17而望矣，不如登高之博见18也。登高而招19，臂非加长也，而见者远20；顺风而呼，声非加疾21也，而闻者彰22。假舆马者23，非利足也24，而致25</Text>
                    <View style={styles.icon_container}>
                        <View style={styles.class_item_span}>
                            <Icon name="map-marker" size={10} style={{color:"#5eae00"}}/>
                            <Text
                                style={styles.class_item_span_content}
                            >
                                1楼102
                            </Text>
                        </View>
                        <View style={styles.class_item_span}>
                            <Icon name="clock-o" size={10} style={{color:"#5eae00"}}/>
                            <Text
                                style={styles.class_item_span_content}
                            >
                                2018-03-07  09:30
                            </Text>
                        </View>
                    </View>
                </View>
                <Button
                    small
                    containerViewStyle={{marginTop:10,height:30}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf',height:30}}
                    title='点击报名'
                    // onPress={}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width:width,
        height:200
    },
    math_detail:{
        width:width*0.9,
        marginLeft:width*0.05,
        backgroundColor:'#fff',
        marginTop:10,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,

    },
    icon_container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:5,
        marginBottom:5
    },
    class_item_span:{
        flexDirection:'row',
        marginRight:10,
        marginTop:2
    },
    class_item_span_content:{
        fontSize:8,
        marginLeft:5,

    },
});