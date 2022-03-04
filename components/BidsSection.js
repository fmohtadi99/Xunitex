import React , { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const styles = {
    ViewStyle:{
        marginTop: 8,
        paddingLeft: 16,
        paddingRight: 16
    },
    tableBox:{
        backgroundColor: '#c4c4c420',
        borderRadius: 5,
        padding: 5
    },
    BidsData:{
        fontSize: 18,
        color: 'blue',
        borderBottomWidth: 1,
        borderColor: '#262A2E10',
        paddingTop: 1,
        paddingBottom: 1,
        fontFamily: "RobotoCondensed-Regular"
    }
};

class BidsSection extends Component {
    state = { xBidsData: [] };


    constructor(props) {
        super(props);
        let url="https://api.nobitex.ir/v2/orderbook/BTCUSDT";
        axios.get(url)
             .then(res => this.setState({ xBidsData: res.data.asks }));
    }

    renderBidsData() {
        return this.state.xBidsData.map(bids => <Text key={bids} style={styles.BidsData}>{bids}</Text>)
    }

    render() {

        

        return (
            <View style={ styles.ViewStyle }>
                <View style={ styles.tableBox }>
                    {this.renderBidsData()}
                </View>
            </View>
        );
    }
}

export default BidsSection;