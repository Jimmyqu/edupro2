import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import  CameraBtn from './CameraButton'
import Spinner from 'react-native-loading-spinner-overlay';

class imagePick extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avatarSource: null,
            loading:false,
            visible: false
        }
    }

    onFileUpload(file, fileName,) {
        this.setState({
            avatarSource:file,
            loading:true,
            visible: true
        });
        console.log(this.state.visible)
        setTimeout(()=>{
            this.setState({
                visible:false
            });
            console.log(2)
        },1000)
        console.log(1)
    }

    render(){

        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Spinner
                        style={{width:100,height:100,backgroundColor:'red'}}
                        visible={this.state.visible}
                        textContent={"Loading..."}
                        textStyle={{color: '#FFF'}} />

                <View
                    style={{padding:5,width:110,height:110,backgroundColor:'#336699',borderRadius:110}}
                >
                    <Image
                        source={{uri:this.state.loading?this.state.avatarSource:null}}
                        style={{width:100,height:100,borderRadius:100}}
                    />

                    <CameraBtn
                        // style={{position:'absolute',right:0,top:70}}
                        onFileUpload={this.onFileUpload.bind(this)}
                    />
                </View>

            </View>
        )
    }


}

const styles = StyleSheet.create({
    cameraBtn: {
        padding:5
    },
    count:{
        color:'#fff',
        fontSize:12
    },
    fullBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    countBox:{
        position:'absolute',
        right:-5,
        top:-5,
        alignItems:'center',
        backgroundColor:'#34A853',
        width:16,
        height:16,
        borderRadius:8,
        justifyContent:'center'
    }
});

export default imagePick;
