import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Divider ,List, ListItem} from 'react-native-elements'
const my=[
    {
        name: 'Jimmy',
        avatar_url: 'http://imgs.aixifan.com/cms/2018_02_22/1519293027325.png?imageView2/1/w/520/h/256',
        subtitle: '15123456789'
    },
];
const FetchList = [
    {
        name: '姓名',
        subtitle:'jimmy'
    },
    {
        name: '性别',
        subtitle:'男'
    },
    {
        name: '学号',
        subtitle:'123456'
    },
    {
        name: '学院',
        subtitle:'经济'
    },
    {
        name: '专业',
        subtitle:'电商'
    },
    {
        name: '班级',
        subtitle:'3年2班'
    },

];
const list = [
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

export default class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <List containerStyle={{marginBottom: 0}}>
                    {
                        my.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatarStyle={{height:60,width:60,borderRadius:60}} avatarOverlayContainerStyle={{height:60,width:60,borderRadius:60}}
                                avatarContainerStyle={{height:60,width:60,borderRadius:60}}
                                avatar={{uri:l.avatar_url}}
                                rightTitle={l.subtitle}
                                rightTitleStyle={{fontSize:12}}
                                containerStyle={{height:80,justifyContent:'center'}}
                                key={i}
                                title={l.name}
                                hideChevron={true}
                            />
                        ))
                    }
                </List>

                <List containerStyle={{marginBottom: 0}}>
                    {
                        FetchList.map((l, i) => (
                            <ListItem
                                rightTitle={l.subtitle}
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
                        list.map((l, i) => (
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
        );
    }
}