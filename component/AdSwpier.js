import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import utils from './common/utils'
import Swiper from 'react-native-swiper'

const width = utils.width;
url='http://rap2api.taobao.org/app/mock/5504/GET//example/1517900324538'
export default class stars extends Component {

    constructor(porps) {
        super(porps);
        this.state = {
            Img: null,
            loading:false
        }
    }
    _renderIMG(data){
        console.log(data)
        const arr=[];
        for (let i in data.array){
            arr.push(
                <View key={i} style={styles.slide}>
                    <TouchableOpacity
                        style={{flex :1}}
                        onPress={()=>this.props.navigate('公告详情',{data:data.array[i].image})}
                    >
                        <Image
                            resizeMode='stretch'
                            style={styles.image}
                            source={{uri:data.array[i].image}}
                        />
                    </TouchableOpacity>
            </View>)
        }

        this.setState({
            Img:arr,
            loading:true
        });
    }
    componentDidMount() {
        utils.get(url,this._renderIMG.bind(this))  //绑定this 传递到_renderIMG中
    }
    render() {
        return (
            <View style={styles.container}>
                    {this.state.loading?<Swiper
                        style={styles.wrapper}
                        height={240}
                        autoplay={true}
                        autoplayTimeout={4}
                        dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: 'yellow', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
                            bottom: 23, left: null, right: 10
                        }}
                        loop>
                        {this.state.Img.map((val)=>val)}
                    </Swiper>:<View><Text>not yet</Text></View>}
                </View>



        );
    }


}

const styles = StyleSheet.create({
    container: {
        height:200
    },
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width:width,
        flex: 1
    }
});

