import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

export default class App extends Component {

    _itemRender=(val)=>{
       this.props.navigation.navigate('classType',{ type: val })
    };

    render() {
        const ele = (val) => (
            <TouchableOpacity onPress={() => this._itemRender(val)}>
                <View >
                    <Text style={{textAlign:'center',justifyContent:'center'}}>{val}</Text>
                </View>
            </TouchableOpacity>
        );

        const tableHead = ['三月', '星期一', '星期二', '星期三','星期四', '星期五'];
        const tableTitle = ['第一节', '第二节','第三节', '第四节'];
        const tableData = [
            [ele('数学'), ele('数学'), ele('数学'),ele('数学'), ele('数学')],
            [ele('语文'), ele('语文'), ele('语文'),ele('语文'), ele('语文')],
            [ele('语文'), ele('语文'), ele('语文'),ele('语文'), ele('语文')],
            [ele('英语'), ele('英语'), ele('英语'),ele('英语'), ele('英语')],
        ];

        const tableTitle1 = ['第五节', '第六节','第七节'];
        const tableData1 = [
            [ele('数学'), ele('数学'), ele('数学'),ele('数学'), ele('数学')],
            [ele('语文'), ele('语文'), ele('语文'),ele('语文'), ele('语文')],
            [ele('英语'), ele('英语'), ele('英语'),ele('英语'), ele('英语')],

        ];
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Table
                        style={{backgroundColor:'#fff'}}
                        borderStyle={{borderColor:'#C7C7C7'}}
                    >
                        <Row data={tableHead} flexArr={[1, 1, 1, 1,1]} style={styles.head} textStyle={styles.text}/>
                        <TableWrapper style={{flexDirection: 'row'}}>
                            <Col data={tableTitle} style={styles.title} heightArr={[60,60]} textStyle={styles.text}/>
                            <Rows
                                data={tableData}
                                flexArr={[1, 1, 1, 1, 1,]}
                                style={styles.row}

                            />
                        </TableWrapper>


                    </Table>
                </View>

                <View style={styles.card}>
                    <Table
                        style={{backgroundColor:'#fff'}}
                        borderStyle={{borderColor:'#C7C7C7'}}>
                        <TableWrapper style={{flexDirection: 'row',}}>
                            <Col data={tableTitle1} style={styles.title} heightArr={[60,60]} textStyle={styles.text}/>
                            <Rows data={tableData1} flexArr={[1, 1, 1, 1, 1,]} style={styles.row}/>
                        </TableWrapper>
                    </Table>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:15,
        paddingRight:15,
        paddingLeft:15
    },
    card:{
        marginTop:10,
        backgroundColor: 'black',
        elevation: 2,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5
    },
    head: {
        height: 50,
        backgroundColor: '#F0F0F0',

    },
    title: {
        flex: 1,
        backgroundColor: '#F0F0F0',

    },
    row: {
        height: 60 ,

    },
    text: { textAlign: 'center' }
})