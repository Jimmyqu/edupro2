import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
    Linking,
    BackHandler,
    ToastAndroid,
    DeviceEventEmitter,
    NativeAppEventEmitter,
    Platform,
    Navigator
} from 'react-native';

import AdSwiper from '../component/AdSwpier'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Divider} from 'react-native-elements'
import openClass from "../component/index/openclass";
import utils from '../component/common/utils'
import Global from '../component/common/Global'
import ViewLoading from '../component/ViewLoading'
import BackgroundTimer from 'react-native-background-timer';
import scheduleDetail from "../component/index/scheduleDetail";

import { Location } from 'react-native-baidumap-sdk'
import {toastShort} from "../component/toast";

const openClassUrl =utils.url+'CollegeManager/api/index/newCourseList';
const todayClassUrl =utils.url+'CollegeManager/api/index/todayCourseList';
const uploadPositionUrl=utils.url+'CollegeManager/api/user/uploadPosition';
const versionUrl=utils.url+'CollegeManager/api/index/getVersion';
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            openClass: null,
            todayClass:null,
            loading:false,
            updateLink:'',
            mockData:[
                {
                    title:'考研路上有我陪伴',
                    content:'考研是一场自我的抉择，犹如经历一场寒冬，路只有一条，孤立无助，迷茫而彷徨，命运需自己掌握，相信你一定能成功，等待破茧成蝶的那一刻，我们一直陪伴着你，跨越困难，走向顶峰，多少个日夜，成就你心中的梦想，不忘初心，为梦而生！',
                    img:require('../component/img/indexMock/1.png'),
                    url:'http://www.iqiyi.com/v_19rrbkvy4w.html#vfrm=8-8-0-1'
                },
                {
                    title:'2019考研英语“波妈”全程陪伴课程',
                    content:'“波妈”陪伴课基础段内容：针对单词进行补充强化，以长难句的形式学习语法，操练五大热考小作文题型；英语一“波妈”陪伴课强化段内容：对真题进行查漏补缺，对阅读、完形、翻译、新题型进行全面突破，作文批改；英语二“波妈”陪伴课强化段内容：包括真题讲解和作文讲解，真题操练和注意事项，作文批改突破作文瓶颈；英语一“波妈”陪伴课冲刺段内容：模拟考试，进行全面操练和讲解，针对大作文预测五道题；英语二“波妈”陪伴课冲刺段内容：内部密卷，模拟考试，大作文预测，大作文批改。',
                    img:require('../component/img/indexMock/2.png'),
                    url:'http://www.iqiyi.com/v_19rrca1lgg.html#vfrm=8-8-0-1'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第一集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../component/img/indexMock/3.png'),
                    url:'http://www.iqiyi.com/v_19rrc0ezis.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第二集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../component/img/indexMock/4.png'),
                    url:'http://www.iqiyi.com/v_19rrciudys.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第三集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../component/img/indexMock/5.png'),
                    url:'http://www.iqiyi.com/v_19rrcit0bc.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第四集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../component/img/indexMock/6.png'),
                    url:'http://www.iqiyi.com/v_19rrcj1rv0.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第五集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../component/img/indexMock/7.png'),
                    url:'http://www.iqiyi.com/v_19rrcj2630.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第六集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../component/img/indexMock/8.png'),
                    url:'http://www.iqiyi.com/v_19rrcibgy4.html'
                },
            ]
        }
    }

    _openClass(data){
        const mockArr=this.state.mockData.slice(0,3)

        const arr=[];
        for (let i in mockArr){

            arr.push(
                <View key={i} >
                    <TouchableOpacity
                        onPress={() => Linking.openURL(mockArr[i].url)}
                    >
                        <View style={styles.class_item}>
                            <View style={{width:80,height:70,}}>
                                <Image
                                    resizeMode="cover"
                                    blurRadius={1}
                                    style={{width:80,height:70}}
                                    source={mockArr[i].img}
                                    // source={{uri:this.state.mockData[i].img}}
                                />
                            </View>

                            <View style={styles.item_r}>
                                <Text style={styles.item_r_title}>{mockArr[i].title}</Text>
                                <Text
                                    numberOfLines={4}
                                    style={styles.item_r_content}
                                >
                                    {mockArr[i].content}
                                </Text>
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
                            resizeMode={'contain'}
                            blurRadius={1}
                            style={{width:80,height:70,}}
                            source={require('../static/img/1.jpg')}
                            // defaultSource={require('../static/img/1.jpg')} //IOS 安卓无
                        />
                        <View style={styles.item_r}>
                            <Text style={styles.item_r_title}>暂无资源</Text>
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
        console.log(data)
        for (let i in data.data){
            arr.push(
                <View key={i} >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('classType',
                            {
                                type:data.data[i].title,
                                courseId:data.data[i].id,
                                userId:Global.userId,
                                bgUrl:data.data[i].image.url
                            })

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
                                        <Icon name="bookmark" size={15} style={{color:"#5eae00",paddingLeft:2}}/>
                                        <Text
                                            style={styles.class_item_span_content}
                                        >
                                            {`第${data.data[i].turnNumber}节`}
                                        </Text>
                                    </View>
                                    <View style={styles.class_item_span}>
                                        <Icon name="map-marker" size={15} style={{color:"#5eae00",paddingLeft:2}}/>
                                        <Text
                                            style={styles.class_item_span_content}
                                        >
                                            {data.data[i].areaInfo.name+'-'+data.data[i].address}
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

    //version link
    confirm(){
        Linking.openURL(this.state.updateLink) .catch((err)=>{
            alert('下载出错', err);
        });
    }
    componentDidMount(){
        this._openClass()


        //请求版本号
        fetch(versionUrl,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then((response) => {
            return response.json()
        })
            .then((responseData) => {
                console.log(responseData);
                this.setState({
                    updateLink:responseData.data.url
                });
                if(responseData.data.num!==utils.version){
                    Alert.alert('版本更新','有新版本请点击确认更新',[
                        {
                        text:"确认",
                        onPress:this.confirm.bind(this)}
                    ]);
                }
            })

        //上传定位
        Location.init().then((d)=> {
                Location.addLocationListener(location =>
                    BackgroundTimer.setInterval(()=>{
                        Global.pos={
                            lon:location.longitude,
                            lat:location.latitude,
                        }
                        const option={
                            lon:location.longitude,
                            lat:location.latitude,
                            userId:Global.userId,
                        };
                        utils.post(
                            uploadPositionUrl,
                            utils.toQueryString(option),
                            ()=>{
                                Location.stop()
                            }
                        );
                    },2000)
                )
                Location.start()
            }
        ).catch((err)=>{
            toastShort("定位失败"+err)
        })


        // Alipay.pay("signed pay info string").then(function(data){  //alipay
        //     console.log(data);
        // }, function (err) {
        //     console.log(err);
        // });

        // BackgroundTimer.setInterval(() => {
        //     Geolocation.getCurrentPosition()
        //         .then(data => {
        //             return JSON.stringify(data);
        //         }).then(info=>{
        //         const option={
        //             lon:JSON.parse(info).longitude,
        //             lat:JSON.parse(info).latitude,
        //             userId:Global.userId,
        //         };
        //         alert(option.lon)
        //         utils.post(
        //             uploadPositionUrl,
        //             utils.toQueryString(option),
        //             ()=>{}
        //         );
        //     }).catch(e =>{
        //         console.warn(e, 'error');
        //     });
        //
        // },5000);

        //     navigator.geolocation.getCurrentPosition(  //自带定位真机可用
        //         (position) => {
        //             var crd = position.coords;
        //             console.warn(crd.latitude);
        //             console.warn(crd.longitude);
        //             const option={
        //                 lon:crd.longitude,
        //                 lat:crd.latitude,
        //                 userId:Global.userId,
        //             };
        //             alert(option.lon)
        //             utils.post(
        //                 uploadPositionUrl,
        //                 utils.toQueryString(option),
        //                 ()=>{}
        //             );
        //             // alert(latitude);
        //             // alert(longitude);
        //         },
        //         (error) => alert(error.message),
        //         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        //     );

        const data={
                userId:Global.userId
            };
            console.log(data.userId)

            utils.post(
                todayClassUrl,
                utils.toQueryString(data),
                this._todayClass.bind(this)
            )

    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                {this.state.loading?<ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.container}
                >
                    <AdSwiper
                        navigate={navigate}
                    />
                    <View>
                        <View style={styles.public_class}>
                            <View style={{flexDirection:'row',height:40,justifyContent:'space-between'}}>
                                <Text style={styles.title}>[ 课程资源 ]</Text>
                                <TouchableOpacity
                                    style={{flexDirection:'row'}}
                                    onPress={()=>this.props.navigation.navigate('allOpenClass')}
                                ><Text style={{
                                    lineHeight:40,
                                    height:40,
                                    fontSize:utils.style.FONT_SIZE_SMALL
                                }}>全部资源</Text>
                                    <Icon
                                        style={{color:"#E8E8E8",paddingLeft:2, height:40,lineHeight:40,
                                            paddingRight:15,marginTop:2}}
                                        name="chevron-right"
                                        size={utils.style.FONT_SIZE_SMALL}
                                    />
                                </TouchableOpacity>

                            </View>

                            <Divider style={{height:3}}/>
                            {this.state.openClass}
                        </View>
                        <Text style={styles.title}>[ 今日课表 ]</Text>
                        <Divider style={{height:3}}/>
                        {this.state.todayClass}
                    </View>
                </ScrollView>:<ViewLoading/>}
            </View>

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
        paddingBottom:5,
        color:'#000'
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
        fontWeight:'bold',
        color:'#000'
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