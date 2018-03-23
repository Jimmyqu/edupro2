import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image, BackHandler, ToastAndroid
} from 'react-native';

import utils from '../component/common/utils'
import {FormInput,Button} from 'react-native-elements'
import {toastShort} from '../component/toast';
import md5 from "react-native-md5";
import {NavigationActions} from 'react-navigation';
import Global from '../component/common/Global'
import { ProgressDialog } from 'react-native-simple-dialogs';

const loginUrl =utils.url+'WenDuEducation/api/index/login';
const resetActions = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home',params:{ userId: 'bar' }})]
});
export default class login extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            user:'15307104100',
            pass:'123456',
            progressVisible:false
        }
    }

    componentDidMount(){
    }

    // 请求处理
    handleRe(data){
        this.setState({
            progressVisible:false
        });
        if(data.code==1){
            if(data.msg==="error_000"){
                toastShort('服务器连接不上');
            }
            if(data.msg==="error_001"){
                toastShort('账号或密码错误');
            }
        }
        if(data.code==0){
            if(data.data.mobile){
                toastShort('登录成功');
                //AsyncStorage.setItem('id',JSON.stringify(data.data.id))
                Global.userId=data.data.id;
                this.props.navigation.dispatch(resetActions)
            }else {
                toastShort('请先绑定手机号');
                Global.userId=data.data.id;
                return false
            }

        }
    }


    _checkIn(){
        // this.setState({
        //     progressVisible:true
        // })
        const data={
            account:this.state.user,
            password:md5.hex_md5(this.state.pass).toUpperCase()
        };
        utils.post(
            loginUrl,
            utils.toQueryString(data),
            this.handleRe.bind(this)  //传递this 给内部函数
        )
    }

    // componentWillMount(){
    //     BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    //
    // }
    //
    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    // }
    //
    // onBackAndroid = () => {
    //     const s = this.props.navigation;
    //     console.log(s)
    //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //         //最近2秒内按过back键，可以退出应用。
    //         return false;
    //     }
    //     this.lastBackPressed = Date.now();
    //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     return true;
    //
    // };

    render() {
        return (
            <ScrollView >
                <ProgressDialog
                    visible={this.state.progressVisible}
                    title=""
                    message="正在登陆"
                />
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
                        containerStyle={{width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff",fontSize:utils.style.FONT_SIZE_SMALL}}
                        placeholder='学号或手机号登陆'
                        onChangeText={(user)=>this.setState({user})}
                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        containerStyle={{width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff",fontSize:utils.style.FONT_SIZE_SMALL}}
                        placeholder='密码'
                        onChangeText={(pass)=>this.setState({pass})}
                    />
                </View>

                <Button
                    small
                    containerViewStyle={{marginTop:10,height:40}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#fabe00'}}
                    title='登陆'
                    //onPress={() =>this.props.navigation.dispatch(resetActions)}
                    onPress={()=>this._checkIn()}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}
                          onPress={() => this.props.navigation.navigate('Regpass')}
                    >
                        忘记密码？
                    </Text>
                    <Text style={styles.text}
                          onPress={() => this.props.navigation.navigate('Reg',{
                              number:this.state.user
                          })}
                    >
                        绑定手机
                    </Text>

                </View>

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
        width:utils.size.width,
        alignItems:'center'
    },
    textContainer:{
        marginTop:15,
        flexDirection:'row',
        justifyContent :'space-between',
        marginLeft:15,
        marginRight:15
    },
    text:{
        fontSize:utils.style.FONT_SIZE_SMALL,
        color:'#231815'
    }
});