import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import {List, ListItem} from 'react-native-elements'
import utils from "../component/common/utils";
import Global from '../component/common/Global'
import CameraButton from '../component/CameraButton'
import ViewLoading from '../component/ViewLoading'

// const my=[
//     {
//         name: 'Jimmy',
//         avatar_url: 'http://imgs.aixifan.com/cms/2018_02_22/1519293027325.png?imageView2/1/w/520/h/256',
//         subtitle: '15123456789'
//     },
// ];

const settingList = [
    {
        name: '更改密码',
        to:'Forget'
    },
    {
        name: '公开课程',
        to:'MyClass'
    },
    {
        name: '用户反馈',
        to:'Feedback'
    },
    {
        name: '版本更新',
        to:'Update'
    },
];
const settingUrl =utils.url+'WenDuEducation/api/index/getInfo';
const avatarUrl =utils.url+'WenDuEducation/api/index/modifyAvatar';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:null,
            loading:false,
            avatarSource: null,
            iconLoading:false,
            iconVisible: false,
        }
    }

    componentDidMount() {
        const option={
            userId:Global.userId
        };
        utils.post(
            settingUrl,
            utils.toQueryString(option),
            this._settingCallback.bind(this)
        );

    }

    _settingCallback(data){
        this.setState({
            data:data,
            loading:true
        });

        console.log(this.state.data.data.profilePhoto)
    }

    onFileUpload(file, fileName,) {

        console.log(file)
        let data =new FormData();
        let file11 = {uri: file, type: 'multipart/form-data', name: 'avatar.jpg'};
        data.append('userId','1')
        data.append('avatar',file11);
        const option ={
            method:'post',
            headers:{
                'Content-Type':'multipart/form-data',
            },
            body:data
        };

        fetch(
            avatarUrl,
            option
        ).then(function(response){
            if(response.ok){
                console.log('suc')
                return response.text();
            }else{
                console.log('网络错误，请稍后再试')
                return ;
            }
        }).then(function(data){
            console.log('imgUrl',data);
        });
        this.setState({
            avatarSource:file,
            iconLoading:true,
            iconVisible: true
        });
    }

    render() {
        // const avatarList=[
        //     {
        //         name: this.state.data.data.name,
        //         avatar_url: this.state.data.data.profilePhoto,
        //         subtitle: this.state.data.data.mobile
        //     },
        // ]
        const InfoList=this.state.loading?[
            {
                name: '姓名',
                subtitle:this.state.data.data.name
            },
            {
                name: '性别',
                subtitle:this.state.data.data.sex===0?'男':'女'
            },
            {
                name: '学号',
                subtitle:this.state.data.data.number||'2'
            },
            {
                name: '学院',
                subtitle:this.state.data.data.institute.name
            },
            {
                name: '专业',
                subtitle:this.state.data.data.specialty.name
            },
            {
                name: '班级',
                subtitle:this.state.data.data.grade.name
            },

        ]:[
            {
                name: '姓名',
                subtitle:''
            },
            {
                name: '性别',
                subtitle:''
            },
            {
                name: '学号',
                subtitle:''
            },
            {
                name: '学院',
                subtitle:''
            },
            {
                name: '专业',
                subtitle:''
            },
            {
                name: '班级',
                subtitle:''
            },

        ];

        return (
            <View style={{flex:1}}>
                {this.state.loading?<ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flex:1}}
                >
                    <View >
                        <View style={{
                            flexDirection:'row',
                            height:100,
                            backgroundColor:'#fff',
                            borderColor:'#bbbbbb',
                            borderTopWidth:1.5,
                            borderBottomWidth:1.5,
                            borderRightWidth:0,
                            borderLeftWidth:0,
                            marginTop:10
                        }}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Image
                                    source={{uri:this.state.iconLoading?
                                            this.state.avatarSource:
                                            this.state.data.data.profilePhoto}}
                                    style={{
                                        width:60,
                                        height:60,
                                        borderRadius:60,
                                        borderColor:'#336699',
                                        borderWidth:3}}
                                />
                                <CameraButton
                                    style={{position:'absolute',top:55,left:50}}
                                    onFileUpload={this.onFileUpload.bind(this)}
                                />
                            </View>
                            <View style={{
                                flex:2,
                                justifyContent:'center'}}>
                                <Text style={{fontSize:utils.style.FONT_SIZE_TITLE}}>
                                    {this.state.data.data.name}
                                </Text>
                            </View>
                            <View style={{
                                flex:2,
                                justifyContent:'center',
                                alignItems:'center'}}>
                                <Text>
                                    {this.state.data.data.mobile}
                                </Text>
                            </View>

                        </View>

                        <List containerStyle={{marginBottom: 0}}>
                            {
                                InfoList.map((l, i) => (
                                    <ListItem
                                        rightTitle={l.subtitle}
                                        rightTitleStyle={{fontSize:utils.style.FONT_SIZE_SMALL}}
                                        containerStyle={{height:35}}
                                        key={i}
                                        title={l.name}
                                        hideChevron={true}

                                    />
                                ))
                            }
                        </List>

                        <List containerStyle={{marginBottom: 20}}>
                            {
                                settingList.map((l, i) => (
                                    <ListItem
                                        containerStyle={{height:35}}
                                        key={i}
                                        title={l.name}
                                        subtitle={l.subtitle}
                                        onPress={() => this.props.navigation.navigate(l.to)}
                                    />
                                ))
                            }
                        </List>
                    </View>
                </ScrollView>:<ViewLoading/>}
            </View>

        );
    }
}