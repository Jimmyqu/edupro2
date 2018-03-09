import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView
} from 'react-native';

import utils from "../common/utils";

const width = utils.size.width;
export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '公告详情',
    });
    render() {
        const { params } = this.props.navigation.state;
        console.log(params)
        return (
            <ScrollView >
                <Image
                    style={{width:width,height:200,}}
                    source={{uri:params.data}}
                />
                <View>
                    <Text style={styles.news_title}>news title</Text>
                    <Text style={styles.news_time}>2018-03-09</Text>
                    <View style={styles.detail_container}>
                        <Text style={styles.news_detail}>
                            君子1曰：学不可以已2。
                            劝学
                            劝学(2张)
                            青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳5，輮（róu）6以为轮，其曲中规7。虽有槁暴（pù）8，不复挺9者，輮使之然也。故木受绳10则直，金11就砺12则利，君子博学而日参省乎己13，则知明而行无过矣。
                            故不登高山，不知天之高也；不临深溪，不知地之厚也；不闻先王之遗言14，不知学问之大也。干、越、夷、貉之子，生而同声，长而异俗，教使之然也。诗曰：“嗟尔君子，无恒安息。靖共尔位，好是正直。神之听之，介尔景福。”神莫大于化道，福莫长于无祸。
                            吾尝终日而思矣15，不如须臾之所学16也；吾尝跂17而望矣，不如登高之博见18也。登高而招19，臂非加长也，而见者远20；顺风而呼，声非加疾21也，而闻者彰22。假舆马者23，非利足也24，而致25千里；假舟楫26者，非能水27也，而绝28江河。君子生（xìng）29非异也，善假于物也30。
                            南方有鸟焉，名曰蒙鸠，以31羽为32巢，而编之以发，系之苇苕（tiáo）33，风至苕折34，卵破子死。巢非35不完也，所系者然36也。西方有木焉，名曰射干，茎长四寸，生于高山之上，而临百仞之渊，木茎非能长也，所立者然也。蓬生麻中，不扶而直；白沙在涅，与之俱黑37。兰槐之根是为芷，其渐之滫38，君子不近，庶人不服39。其质40非不美也，所渐者然也41。故君子居必择乡，游必就士，所以防邪辟42而近中正43也。
                            物类之起，必有所始。荣辱之来，必象其德。肉腐出虫，鱼枯生蠹44。怠慢忘身，祸灾乃作。强自取柱45，柔自取束46。邪秽在身，怨之所构。施薪若一，火就燥也，平地若一，水就湿也。草木畴生，禽兽群焉，物各从其类也。是故质的张，而弓矢至焉；林木茂，而斧斤至焉；树成荫，而众鸟息焉。醯酸，而蚋聚焉。故言有招祸也，行有招辱也，君子慎其所立乎！
                        </Text>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    news_title:{
        marginTop:20,
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'#000'
    },
    news_time:{
        fontSize:12,
        textAlign:'center',
        color:'#c9c9ca'
    },
    detail_container:{
        marginTop:20,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:50
    },
    news_detail:{
        fontSize:14,
        textAlign:'center',
        color:'#000'
    }


});