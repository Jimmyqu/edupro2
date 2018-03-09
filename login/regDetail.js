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

export default class reg extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '确认',
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
                        placeholder='姓名'

                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='学号'
                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='学院'

                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='专业'
                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='班级'

                    />
                    <FormInput
                        underlineColorAndroid='transparent'
                        containerStyle={{marginLeft:0,width:utils.size.width,borderWidth:1,borderColor:'#dcdddd',height:40}}
                        inputStyle={{width:utils.size.width,backgroundColor:"#fff"}}
                        placeholder='性别'
                    />
                </View>
                <Button
                    small
                    containerViewStyle={{marginTop:10,height:45}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf'}}
                    title='注册'
                    onPress={()=>alert('success')}
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