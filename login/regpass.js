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
import Global from '../component/common/Global'


const smsUrl=utils.url+'CollegeManager/api/index/sendCode';
const bindUrl=utils.url+'CollegeManager/api/index/searchPwd'
export default class reg extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '找回密码',
    });
    constructor(porps) {
        super(porps);
        this.state = {
            mobile:'',
            sms:'',
            password:'',
            btnState:true
        }
    }

    componentDidMount(){

    }
    _submitBtn(){
        if(this.state.mobile&&this.state.sms&&this.state.password){
            const data={
                mobile:this.state.mobile,
                code:this.state.sms,
                password:this.state.password
            };

            utils.post(
                bindUrl,
                utils.toQueryString(data),
                (data)=>{
                    if(data.code==1){
                        toastShort('修改失败');
                    }
                    if(data.code==0){
                        toastShort('修改成功');
                    }
                }
            );
        }else {
            toastShort('请输入正确格式');
        }

    }

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <Image
                        resizeMode={'contain'}
                        source={require('../component/img/logo.png')}
                        style={{width:140,height:140}}
                    />
                    <Image
                        resizeMode={'contain'}
                        source={require('../component/img/in.png')}
                        style={{width:140,height:60}}
                    />
                </View>
                <View style={styles.fromContainer}>
                    <FormInput
                        onChangeText={(mobile)=>this.setState({mobile})}
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff",fontSize:utils.style.FONT_SIZE_SMALL}}
                        placeholder='手机号码'
                        keyboardType={'numeric'}

                    />
                    <FormInput
                        onChangeText={(sms)=>this.setState({sms})}
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff",fontSize:utils.style.FONT_SIZE_SMALL}}
                        placeholder='验证码'
                    />
                    <View style={{position:'absolute',top:45,right:10,}}>
                        <CountDown
                            style={{
                                backgroundColor:'#008ccf',
                                width:70,height:30,
                                borderRadius:5
                            }}
                            textStyle={{color: 'black',fontSize:10}}
                            enable={this.state.btnState}  //是否可用  判断电话
                            timerCount={60}
                            timerTitle={'获取验证码'}
                            disableColor={'red'}
                            onClick={(shouldStartCounting)=>{
                                if(this.state.mobile.length===11){
                                    shouldStartCounting(true);
                                    this.setState({btnState:false})
                                    const data={
                                        mobile:this.state.mobile,
                                        type:1
                                    };
                                    console.log(data)
                                    utils.post(
                                        smsUrl,
                                        utils.toQueryString(data),
                                        (data)=>{
                                            if(data.code===0){
                                                console.log(data)
                                                toastShort('请求成功,请查看手机')
                                                this.setState({btnState:true})
                                            }else if(data.code===1){
                                                toastShort('请求失败,请稍后再试')
                                                this.setState({btnState:true})
                                            }
                                        }
                                    );

                                }else {
                                    toastShort('请输入正确的手机号')
                                    shouldStartCounting(false)
                                }

                            }}
                        />
                    </View>
                    <FormInput
                        secureTextEntry={true}
                        value = {this.state.password}  //提交清空
                        onChangeText={(password)=>this.setState({password})}
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff",fontSize:utils.style.FONT_SIZE_SMALL}}
                        placeholder='请输入新密码'

                    />


                </View>
                <Button
                    small
                    containerViewStyle={{marginTop:10,height:45}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf'}}
                    title='确认修改'
                    onPress={()=>this._submitBtn()}
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