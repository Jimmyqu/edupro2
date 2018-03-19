import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import utils from '../component/common/utils'
import {FormInput,Button} from 'react-native-elements'
import {toastShort} from '../component/toast';
import md5 from "react-native-md5";
import {NavigationActions} from 'react-navigation';
import Global from '../component/common/Global'


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
        }
    }

    componentDidMount(){

    }

    // 请求处理
    handleRe(data){
        if(data.code==1){
            toastShort('账号或密码错误');
        }
        if(data.code==0){
            console.log(data.data.mobile)
            if(data.data.mobile){
                toastShort('登录成功');
                //AsyncStorage.setItem('id',JSON.stringify(data.data.id))
                Global.userId=data.data.id
                this.props.navigation.dispatch(resetActions)
            }else {
                toastShort('请先绑定手机号');
                Global.userId=data.data.id
                return false
            }

        }
    }


    _checkIn(){
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
                        containerStyle={{width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='学号登陆'
                        onChangeText={(user)=>this.setState({user})}
                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        containerStyle={{width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
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
                    onPress={()=>this._checkIn(this)}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}
                          onPress={() => this.props.navigation.navigate('Forget')}
                    >
                        忘记密码？
                    </Text>
                    <Text style={styles.text}
                          onPress={() => this.props.navigation.navigate('Reg')}
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
        fontSize:12,
        color:'#231815'
    }
});