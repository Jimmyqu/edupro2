import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    BackHandler,
    ToastAndroid,
    DeviceEventEmitter,
    NativeAppEventEmitter,
    Platform
} from 'react-native';

import AdSwiper from '../component/AdSwpier'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Divider} from 'react-native-elements'
import openClass from "../component/index/openclass";
import utils from '../component/common/utils'
import Global from '../component/common/Global'
import ViewLoading from '../component/ViewLoading'
import BackgroundTimer from 'react-native-background-timer';


const openClassUrl =utils.url+'WenDuEducation/api/index/newCourseList';
const todayClassUrl =utils.url+'WenDuEducation/api/index/todayCourseList';


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            openClass: null,
            todayClass:null,
            loading:false
        }
    }

    _openClass(data){
        const arr=[];
        for (let i in data.data){
            arr.push(
                <View key={i} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('openClass',{type: '公开课',courseId:data.data[i].id,userId:Global.userId})}
                    >
                        <View style={styles.class_item}>
                            <Image
                                resizeMode="cover"
                                blurRadius={1}
                                style={{width:80,height:70,}}
                                source={require('../static/img/1.jpg')}
                                // defaultSource={require('../static/img/1.jpg')} //IOS 安卓无
                            />
                            <View style={styles.item_r}>
                                <Text style={styles.item_r_title}>{data.data[i].title}</Text>
                                <Text
                                    numberOfLines={2}
                                    style={styles.item_r_content}
                                >
                                    {data.data[i].description}
                                </Text>

                                <View style={[styles.class_item_span,{marginTop:5}]}>
                                    <Icon
                                        style={{color:"#5eae00"}}
                                        name="map-marker"
                                        size={15}
                                    />
                                    <Text
                                        style={styles.class_item_span_content}
                                    >
                                        {data.data[i].address}
                                    </Text>
                                </View>
                                <View style={styles.class_item_span}>
                                    <Icon style={{color:"#5eae00"}} name="clock-o" size={15}/>
                                    <Text
                                        style={styles.class_item_span_content}
                                    >
                                        {data.data[i].timeSlot}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Divider style={{height:3}}/>
                </View>
            )
        }
        if(arr.length===0){
            arr.push(<View key={1} >
                <TouchableOpacity>
                    <View style={styles.class_item}>
                        <Image
                            resizeMode="cover"
                            blurRadius={1}
                            style={{width:80,height:70,}}
                            source={require('../static/img/1.jpg')}
                            // defaultSource={require('../static/img/1.jpg')} //IOS 安卓无
                        />
                        <View style={styles.item_r}>
                            <Text style={styles.item_r_title}>暂无课程</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Divider style={{height:3}}/>
            </View>)
            this.setState({
                openClass:arr,
                loading:true
            });
        }else {
            this.setState({
                openClass:arr,
                loading:true
            });
        }

    }

    _todayClass(data){
        const arr=[];
        for (let i in data.data){
            arr.push(
                <View key={i} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('openClass',
                            {
                                type: '今日课程',
                                courseId:data.data[i].id,
                                userId:Global.userId})
                        }
                    >
                        <View style={styles.schedule_item}>
                            <View style={styles.schedule_item_title}>
                                <Text style={styles.title_l}>
                                    {data.data[i].title}
                                </Text>
                                <Text style={styles.title_r}>
                                    课程内容
                                </Text>
                            </View>
                            <View style={styles.schedule_item_container}>
                                <Text
                                    style={styles.schedule_item_content}
                                    numberOfLines={3}
                                >
                                    {'        '}{data.data[i].description}
                                </Text>
                                <View style={styles.icon_container}>
                                    <View style={styles.class_item_span}>
                                        <Icon name="map-marker" size={15} style={{color:"#5eae00"}}/>
                                        <Text
                                            style={styles.class_item_span_content}
                                        >
                                            {data.data[i].address}
                                        </Text>
                                    </View>
                                    <View style={styles.class_item_span}>
                                        <Icon name="clock-o" size={15} style={{color:"#5eae00"}}/>
                                        <Text
                                            style={styles.class_item_span_content}
                                        >
                                            {data.data[i].timeSlot}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Divider style={{height:3}}/>
                </View>
            )

        }
        if(arr.length===0){
            arr.push(<View key={1} >
                <TouchableOpacity>
                    <View style={styles.class_item}>
                        <Image
                            resizeMode="cover"
                            blurRadius={1}
                            style={{width:80,height:70,}}
                            source={require('../static/img/1.jpg')}
                            // defaultSource={require('../static/img/1.jpg')} //IOS 安卓无
                        />
                        <View style={styles.item_r}>
                            <Text style={styles.item_r_title}>暂无课程</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Divider style={{height:3}}/>
            </View>)
            this.setState({
                todayClass:arr,
                loading:true
            });
        }else {
            this.setState({
                todayClass:arr,
                loading:true
            });
        }


    }

    componentDidMount(){
        // const intervalId = BackgroundTimer.setInterval(() => {
        //     // this will be executed every 200 ms
        //     // even when app is the the background
        //     console.log('tic');
        // }, 200);

        const data={
                userId:Global.userId
            };
            utils.post(
                openClassUrl,
                utils.toQueryString(data),
                this._openClass.bind(this)
            );
            utils.post(
                todayClassUrl,
                utils.toQueryString(data),
                this._todayClass.bind(this)
            )

    }

    // componentWillMount(){
    //     BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    // }
    //
    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    // }
    //
    // onBackAndroid = () => {
    //     // console.log(this.props.navigation.pop(1))
    //     console.log(this.props.navigation)
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
        const { navigate } = this.props.navigation;
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <AdSwiper
                    navigate={navigate}
                />
                {this.state.loading?<View>
                    <View style={styles.public_class}>
                        <Text style={styles.title}>[ 公开课 ]</Text>
                        <Divider style={{height:3}}/>
                        {this.state.openClass}
                    </View>
                    <Text style={styles.title}>[ 今日课表 ]</Text>
                    <Divider style={{height:3}}/>
                    {this.state.todayClass}
                </View>:<ViewLoading/>}

            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    public_class:{
        paddingTop:10,
    },
    title:{
        paddingLeft:15,
        fontSize:utils.style.FONT_SIZE_TITLE,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5
    },
    class_item:{
        flexDirection:'row',
        paddingTop:15,
        paddingLeft:18,
        paddingBottom:15
    },

    item_r:{
        paddingRight:80,
        paddingLeft:15,
    },
    item_r_title:{
        fontSize:utils.style.FONT_SIZE,
        fontWeight:'bold'
    },
    item_r_content:{
        fontSize:utils.style.FONT_SIZE_SMALL,
    },
    class_item_span:{
        flexDirection:'row',
        marginRight:10,
        marginTop:3
    },
    class_item_span_content:{
        fontSize:utils.style.FONT_SIZE_SMALLER,
        marginLeft:5,

    },
    schedule_item:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10
    },
    schedule_item_container:{
        marginTop:5,
        backgroundColor:'#f4fdec',
        borderRadius:5,
    },
    schedule_item_title:{
        flexDirection:"row"
    },
    title_l:{
        flex:1,
        textAlign:'center',
        lineHeight:30,
        backgroundColor:'#0d8ccf',
        fontSize:utils.style.FONT_SIZE_TITLE,
        borderRadius:5,
        height:30,
        marginRight:5
    },
    title_r:{
        flex:2,
        textAlign:'center',
        backgroundColor:'#cbcdcc',
        fontSize:utils.style.FONT_SIZE_SMALL,
        borderRadius:5,
        height:30,
        lineHeight:30,
    },
    schedule_item_content:{
        fontSize:utils.style.FONT_SIZE_SMALL,
        paddingRight:5,
        paddingLeft:5,
        paddingTop:10
    },
    icon_container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:5,
        marginBottom:5
    }


});