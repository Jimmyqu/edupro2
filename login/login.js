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

import {NavigationActions} from 'react-navigation';
const resetActions = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Home'})]
});
export default class login extends Component {

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
                        containerStyle={{width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='手机号码'

                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='密码'
                    />
                </View>

                <Button
                    small
                    containerViewStyle={{marginTop:10,height:40}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#fabe00'}}
                    title='登陆'
                    onPress={() =>this.props.navigation.dispatch(resetActions)}
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
                        点击注册
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