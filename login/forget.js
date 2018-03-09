import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import utils from '../component/common/utils'
import {  FormInput,Button } from 'react-native-elements'

export default class login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '忘记密码',
    });

    constructor(porps) {
        super(porps);
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <Image
                        resizeMode={'contain'}
                        source={require('../component/img/logo.png')}
                        style={{width:100,height:80}}
                    />
                    <Image
                        resizeMode={'contain'}
                        source={require('../component/img/in.png')}
                        style={{width:80,height:60}}
                    />
                </View>
                <View style={styles.fromContainer}>
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='手机号码'

                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='验证码'
                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='修改密码'

                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='再次输入密码'
                    />
                    <Button
                        small
                        containerViewStyle={{position:'absolute',top:45,right:10,width:100,height:30}}
                        // icon={{name: 'envira', type: 'font-awesome'}}
                        buttonStyle={{borderRadius:5,backgroundColor:'#eeefef',height:30}}
                        title='发送验证码'
                        textStyle={{fontSize:12}}
                        color={'#000'}
                    />
                </View>
                <Button
                    small
                    containerViewStyle={{marginTop:10,height:45}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf'}}
                    title='确定'
                    onPress={()=>alert('success')}
                />

            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginBottom:10,
        paddingTop:20,
    },
    fromContainer:{
        width:utils.size.width,
        justifyContent:'center'
    },
    textContainer:{
        marginTop:15,
        flexDirection:'row',
        justifyContent :'space-between',
        marginLeft:15,
        marginRight:15
    },
    text:{
        fontSize:12,
        color:'#00ccff'
    }
});