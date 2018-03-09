import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,ScrollView
} from 'react-native';

import {Button,List, ListItem} from 'react-native-elements'
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
    static navigationOptions = ({ navigation }) => ({
        title: '教师详情',
    });
    render() {
        return (
            <ScrollView style={{paddingBottom:20}}>
                { /* other code from before here */ }
                <Image
                    style={styles.img}
                    source={require('../img/math.png')}
                />

                <List containerStyle={{width:width,height:60,marginTop: 10, borderTopWidth: 0, borderBottomWidth: 0, borderBottomColor: '#cbd2d9',justifyContent:'center'}}>
                    {
                        my.map((l, i) => (
                            <ListItem
                                title={l.name}
                                subtitle={l.subtitle}
                                containerStyle={{justifyContent:'center', borderBottomWidth: 0,}}
                                key={i}
                                hideChevron={true}
                            />
                        ))
                    }
                    <View style={{width:100,position:'absolute',right:30,top:35,flexDirection:'row'}}>
                        <StarRating
                            starSize={12}
                            emptyStarColor={'green'}
                            iconSet={'FontAwesome'}
                            emptyStar={'star-o'}
                            fullStarColor={'#e60012'}
                            disabled={false}
                            maxStars={5}
                            rating={5}
                            starStyle={{marginLeft:5}}
                        />
                        <Text style={{fontSize:10,marginLeft:10}}>5分</Text>
                    </View>

                </List>
                <View style={styles.math_detail}>
                    <Text style={styles.title}>[ 教师详情 ]</Text>
                    <Text style={{lineHeight:30, paddingLeft:15,}}>吾尝终日而思矣15，不如须臾之所学16也；吾尝跂17而望矣，不如登高之博见18也。登高而招19，臂非加长也，而见者远20；顺风而呼，声非加疾21也，而闻者彰22。假舆马者23，非利足也24，而致25</Text>

                </View>
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
        width:width,
        backgroundColor:'#fff',
        marginTop:10,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:20,
    },
    title:{
        paddingLeft:15,
        fontSize:18,
        fontWeight:'bold',
        paddingTop:5,
        paddingBottom:5
    },
});
