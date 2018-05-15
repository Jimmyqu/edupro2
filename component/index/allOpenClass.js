import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
    Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import utils from "../common/utils";
import Global from "../common/Global";
import ViewLoading from '../ViewLoading'
import {Divider} from 'react-native-elements'

const myCourseUrl=utils.url+'CollegeManager/api/course/courseList';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '全部资源',
    });

    constructor(props) {
        super(props);
        this.state={
            openClass: null,
            loading:false,
            mockData:[
                {
                    title:'考研路上有我陪伴',
                    content:'考研是一场自我的抉择，犹如经历一场寒冬，路只有一条，孤立无助，迷茫而彷徨，命运需自己掌握，相信你一定能成功，等待破茧成蝶的那一刻，我们一直陪伴着你，跨越困难，走向顶峰，多少个日夜，成就你心中的梦想，不忘初心，为梦而生！',
                    img:require('../img/indexMock/1.png'),
                    url:'http://www.iqiyi.com/v_19rrbkvy4w.html#vfrm=8-8-0-1'
                },
                {
                    title:'2019考研英语“波妈”全程陪伴课程',
                    content:'“波妈”陪伴课基础段内容：针对单词进行补充强化，以长难句的形式学习语法，操练五大热考小作文题型；英语一“波妈”陪伴课强化段内容：对真题进行查漏补缺，对阅读、完形、翻译、新题型进行全面突破，作文批改；英语二“波妈”陪伴课强化段内容：包括真题讲解和作文讲解，真题操练和注意事项，作文批改突破作文瓶颈；英语一“波妈”陪伴课冲刺段内容：模拟考试，进行全面操练和讲解，针对大作文预测五道题；英语二“波妈”陪伴课冲刺段内容：内部密卷，模拟考试，大作文预测，大作文批改。',
                    img:require('../img/indexMock/2.png'),
                    url:'http://www.iqiyi.com/v_19rrca1lgg.html#vfrm=8-8-0-1'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第一集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../img/indexMock/3.png'),
                    url:'http://www.iqiyi.com/v_19rrc0ezis.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第二集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../img/indexMock/4.png'),
                    url:'http://www.iqiyi.com/v_19rrciudys.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第三集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../img/indexMock/5.png'),
                    url:'http://www.iqiyi.com/v_19rrcit0bc.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第四集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../img/indexMock/6.png'),
                    url:'http://www.iqiyi.com/v_19rrcj1rv0.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第五集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../img/indexMock/7.png'),
                    url:'http://www.iqiyi.com/v_19rrcj2630.html'
                },
                {
                    title:'2019唐五龙考研数学九章突破班第六集',
                    content:'做学霸，跟对老师就能事半功倍，唐五龙老师是数学名师，十年考研辅导经验，考研数学新生代主力军，熟悉考生弱点和应试难点，深知命题规律和重点，授课针对性强，效果显著。',
                    img:require('../img/indexMock/8.png'),
                    url:'http://www.iqiyi.com/v_19rrcibgy4.html'
                },
            ]
        }
    }

    _openClass(data){
        const mockArr=this.state.mockData
        console.log(mockArr)
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

        this.setState({
            openClass:arr,
            loading:true
        });


    }

    componentDidMount(){
        this._openClass()
    }
    render() {

        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={styles.public_class}>
                        {this.state.openClass}
                    </View>
                </View>
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
        fontWeight:'bold',
        color:'#000'
    },
    item_r_content:{
        fontSize:utils.style.FONT_SIZE_SMALL,
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
        fontSize:15,
        borderRadius:5,
        height:30,
        marginRight:5
    },
    title_r:{
        flex:2,
        textAlign:'center',
        backgroundColor:'#cbcdcc',
        fontSize:13,
        borderRadius:5,
        height:30,
        lineHeight:30,
    },
    schedule_item_content:{
        fontSize:12,
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