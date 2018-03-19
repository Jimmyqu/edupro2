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
import CountDown from 'react-native-smscode-count-down'
import md5 from "react-native-md5";
import {toastShort} from '../component/toast'


const smsUrl=utils.url+'WenDuEducation/api/index/sendCode';
export default class reg extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '绑定手机',
    });
    constructor(porps) {
        super(porps);
        this.state = {
            mobile:'',
            sms:'',
        }
    }

    _submitBtn(){

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
                        onChangeText={(mobile)=>this.setState({mobile})}
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='手机号码'

                    />
                    <FormInput
                        onChangeText={(sms)=>this.setState({sms})}
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='验证码'
                    />
                    {/*<Button*/}
                        {/*small*/}
                        {/*containerViewStyle={{position:'absolute',top:45,right:10,width:100,height:30}}*/}
                        {/*// icon={{name: 'envira', type: 'font-awesome'}}*/}
                        {/*buttonStyle={{borderRadius:5,backgroundColor:'#eeefef',height:30}}*/}
                        {/*title='发送验证码'*/}
                        {/*textStyle={{fontSize:12}}*/}
                        {/*color={'#000'}*/}
                        {/*onPress={()=>alert('success')}*/}
                    {/*/>*/}
                    <View style={{position:'absolute',top:45,right:10,}}>
                        <CountDown
                            style={{
                                backgroundColor:'#336699',
                                width:70,height:30,

                            }}
                            textStyle={{color: 'black',fontSize:10}}
                            enable={true}  //是否可用  判断电话
                            timerCount={10}
                            timerTitle={'获取验证码'}
                            disableColor={'gray'}
                            onClick={(shouldStartCounting)=>{
                                if(this.state.mobile.length===11){
                                    shouldStartCounting(true);
                                    const data={
                                        mobile:this.state.mobile
                                    };
                                    utils.post(
                                        smsUrl,
                                        utils.toQueryString(data),
                                        ()=>{
                                            console.log(this.state.mobile)
                                        }
                                    );
                                }else {
                                    toastShort('请输入正确的手机号')
                                    shouldStartCounting(false)
                                }

                            }}
                        />
                    </View>



                </View>
                <Button
                    small
                    containerViewStyle={{marginTop:10,height:45}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf'}}
                    title='确认绑定'

                />

            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        alignItems:'center',
        marginBottom:10
    },
    fromContainer:{
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