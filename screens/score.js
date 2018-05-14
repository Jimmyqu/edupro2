import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import utils from '../component/common/utils'
import {FormInput,Button} from 'react-native-elements'
import {toastShort} from '../component/toast';
import Global from '../component/common/Global'


const loginUrl =utils.url+'WenDuEducation/api/index/login';

export default class login extends Component {
    constructor(porps) {
        super(porps);
        this.state = {

        }
    }

    componentDidMount(){

    }


    render() {
        return (
            <ScrollView >
                <View>
                    <Text>11</Text>
                </View>

            </ScrollView>
        );
    }


}

const styles = StyleSheet.create({

});