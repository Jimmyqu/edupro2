import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

import { ConfirmDialog } from 'react-native-simple-dialogs';

export default class login extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            dialogVisible:true
        }
    }

    componentDidMount(){
    }



    render() {
        return (
            <View >
                <ConfirmDialog
                    contentStyle={{backgroundColor:'red',borderRadius:10}}
                    title="该课程需要付费"
                    visible={this.state.dialogVisible}
                    onTouchOutside={() => this.setState({dialogVisible: false})}
                    positiveButton={{
                        title: "支付",
                        onPress: () => alert(12221)
                    }}
                    negativeButton={{
                        title: "取消",
                        onPress: () => this.setState({
                            dialogVisible:false
                        })
                    }}
                >
                    <View style={{flexDirection:'row',backgroundColor:'red'}}>
                        <Image    source={require('./img/logo.png')}
                                  style={{width:80,height:80}}/>


                        <Text style={{lineHeight:80,marginLeft:150}}>111元</Text>
                    </View>
                </ConfirmDialog>
            </View>
        );
    }


}