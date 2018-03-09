import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput
} from 'react-native';

import {Button,List, ListItem, Icon} from 'react-native-elements'
import utils from '../common/utils'
import StarRating from 'react-native-star-rating';

const width = utils.size.width;
const my=[
    {
        name: 'Jimmy',
        avatar_url: 'http://imgs.aixifan.com/cms/2018_02_22/1519293027325.png?imageView2/1/w/520/h/256',
        subtitle: '15123456789'
    },
];
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <ScrollView style={{paddingBottom:20}}>
                <View style={styles.title}>
                    <Icon
                        size={80}
                        name={'rate-review'}
                        type={'MaterialIcons'}
                        color={"#b5b5b6"}
                    />
                    <View style={{justifyContent:'center',marginLeft:40}}>
                        <Text style={{paddingLeft:10,fontSize:18}}>
                            课程评分
                        </Text>
                        <StarRating
                            starSize={25}
                            emptyStarColor={'#c9c9ca'}
                            iconSet={'FontAwesome'}
                            emptyStar={'star-o'}
                            fullStarColor={'#e60012'}
                            disabled={false}
                            maxStars={5}

                            starStyle={{marginLeft:10}}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>
                </View>
                <View style={styles.math_detail}>
                    <Text style={{paddingLeft:15,fontSize:18}}>评价内容</Text>
                    <TextInput
                        placeholder='请输入评价'
                        underlineColorAndroid='transparent'
                        multiline = {true}
                        numberOfLines = {4}
                        style={{lineHeight:30, paddingLeft:15,}}>
                    </TextInput>

                </View>
                <Button
                    small
                    containerViewStyle={{marginTop:10,height:40}}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    buttonStyle={{borderRadius:8,backgroundColor:'#008ccf',height:40}}
                    title='提交'

                />
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    title:{
        marginTop:5,
        width:width,
        height:80,
        backgroundColor:"#fff",
        flexDirection:'row',
        paddingLeft:20
    },
    math_detail:{
        width:width,
        backgroundColor:'#fff',
        marginTop:10,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:20,
        height:200
    },

});
