import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,ScrollView
} from 'react-native';

import {Button,List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import utils from '../common/utils'
import {toastShort} from '../toast'
import ViewLoading from '../ViewLoading'

const width = utils.size.width;
const courseInfoUrl=utils.url+'WenDuEducation/api/course/courseInfo';
const courseSign=utils.url+'WenDuEducation/api/course/courseJoin';
// const my=[
//     {
//         name: 'Jimmy',
//         avatar_url: 'http://imgs.aixifan.com/cms/2018_02_22/1519293027325.png?imageView2/1/w/520/h/256',
//         subtitle: '15123456789'
//     },
// ];
export default class math extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.type}`,
    });

    constructor(props) {
        super(props);
        this.state={
            data:null,
            loading:false,
            isJoin:false
        }
    }

    _courseInfo(data){
        console.log(data)
        this.setState({
            data:data,
            loading:true,
            isJoin:data.data.isJoin
        });
    }

    _getClassCallback(data){
        console.log(data)
        //支付to do
        if(data.data.orderId!==null){
            this.setState({
                isJoin:1
            })
            toastShort('报名成功')
        }
        console.log(this.state.isJoin)
    }

    _getClass(){
        const { courseId,userId } = this.props.navigation.state.params;
        const option={
            userId:userId,
            courseId:courseId,
            payType:0
        };
        utils.post(
            courseSign,
            utils.toQueryString(option),
            this._getClassCallback.bind(this)
        );
    }

    componentDidMount() {
        const { courseId,userId } = this.props.navigation.state.params;
        const option={
            courseId:courseId,
            userId:userId
        };
        utils.post(
            courseInfoUrl,
            utils.toQueryString(option),
            this._courseInfo.bind(this)
        );

    }

    render() {
        // console.log(this.state.data.data.teacher)
        const type=this.props.navigation.state.params.type==='公开课'; //判断页面
        const my = [this.state.loading?this.state.data.data.teacher:[]];
        const bgurl=this.props.navigation.state.params.bgUrl
        return (
            <ScrollView style={{paddingBottom:20}}>
                { /* other code from before here */ }
                <View style={{width:width,height:200,backgroundColor:'#fff'}}>
                    <Image
                        resizeMode = {'contain'}
                        style={styles.img}
                        source={bgurl?{uri:bgurl}:require('../img/math.png')}
                    />
                </View>
                {this.state.loading?
                    <View style={{marginBottom:50}}>
                        <List containerStyle={{width:width*0.9,height:60,marginTop: 10, borderTopWidth: 0, borderBottomWidth: 0, borderBottomColor: '#cbd2d9',justifyContent:'center',marginLeft:width*0.05}}>
                            {
                                my.map((l, i) => (
                                    <ListItem
                                        roundAvatar
                                        avatarStyle={{height:50,width:50,borderRadius:50}} avatarOverlayContainerStyle={{height:50,width:50,borderRadius:50}}
                                        avatarContainerStyle={{height:50,width:50,borderRadius:50}}
                                        avatar={l.profilePhoto?{uri:l.profilePhoto}:require('../img/math.png')}
                                        subtitle={l.place }
                                        rightTitleStyle={{fontSize:utils.style.FONT_SIZE}}
                                        containerStyle={{justifyContent:'center'}}
                                        key={i}
                                        title={l.name}
                                        onPress={()=>this.props.navigation.navigate('classDetail',{
                                            teacherId:this.state.data.data.teacher.id
                                        })}
                                    />
                                ))
                            }
                        </List>
                        <View style={styles.math_detail}>
                            <Text>{'       '}{this.state.data.data.description}</Text>
                            {/*<View style={styles.class_item_money}>*/}
                                {/*<Icon name="rmb" size={15} style={{color:"#336699"}}/>*/}
                                {/*<Text*/}
                                    {/*style={styles.class_item_span_content}*/}
                                {/*>*/}
                                    {/*{this.state.data.data.money}元*/}
                                {/*</Text>*/}
                            {/*</View>*/}
                            <View style={styles.icon_container}>
                                <View style={styles.class_item_span}>
                                    <Icon name="map-marker" size={15} style={{color:"#5eae00"}}/>
                                    <Text
                                        style={styles.class_item_span_content}
                                    >
                                        {this.state.data.data.address}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    :<ViewLoading/> }

                {type&&this.state.loading?<Button
                    disabled={this.state.isJoin!==0}
                    small
                    containerViewStyle={{marginTop:10,height:30,marginBottom:50}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf',height:30,}}
                    title={this.state.isJoin===0?'点击报名':'已报名'}
                    onPress={()=>this._getClass()}
                />:null}

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width:width,
        height:200
    },
    math_detail:{
        width:width*0.9,
        marginLeft:width*0.05,
        backgroundColor:'#fff',
        marginTop:10,
        paddingTop:30,
        paddingLeft:15,
        paddingRight:15,

    },
    icon_container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:5,
        marginBottom:5
    },
    class_item_span:{
        flexDirection:'row',
        marginRight:10,
        marginTop:2
    },
    class_item_span_content:{
        fontSize:utils.style.FONT_SIZE_SMALLER,
        marginLeft:5,
    },
    class_item_money:{
        position:'absolute',
        flexDirection:'row',
        left:10,
        marginTop:5
    }
});
