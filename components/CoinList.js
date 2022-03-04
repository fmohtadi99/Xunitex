import axios from "axios";
import React, { Component } from "react";
import { View, Text } from 'react-native';
import Card from "./Card";

const BTC = ['BTC • ','Bitcoin', 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/btc.svg','+5.5']
const ETH = ['ETH • ','Etheruem' , 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/eth.svg', '-3.2']
const XRP = ['XRP • ','Ripple', 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/xrp.svg' ,'0']
const DOGE = ['Doge • ','Dogecoin', 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/doge.svg' , '+99']
const TRX = ['TRX • ','Tron', 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/trx.svg' , '-100']

class CoinList extends Component {
    
    state = { Coins: {} };

    constructor(props){
        super(props);
        let apiUrl = 'https://api.nobitex.ir/market/global-stats';
        let apiSettings = '';
        axios.post(apiUrl, apiSettings)
             .then(response => this.setState({ Coins: response.data.markets.binance }));
        //    .then(response => console.log(response.data.markets.binance));
        console.log(this.state.Coins);

    }

    renderCoins(coin, coinSymbol, coinName, coinIconURI, coinInterest) {
        console.log(this.state.Coins);
        return (<Card coinSymbol={coinSymbol}
            coinName={coinName}
            currentPrice={coin} 
            currentInterest={coinInterest}
            coinIconURI= {coinIconURI}/>);   
    }

    render() {
        return (
            <View style={styles.View}>
                {this.renderCoins(this.state.Coins.btc,BTC[0],BTC[1],BTC[2],BTC[3])}
                {this.renderCoins(this.state.Coins.eth,ETH[0],ETH[1],ETH[2],ETH[3])}
                {this.renderCoins(this.state.Coins.xrp,XRP[0],XRP[1],XRP[2],XRP[3])}
                {this.renderCoins(this.state.Coins.trx,TRX[0],TRX[1],TRX[2],TRX[3])}
                {this.renderCoins(this.state.Coins.doge,DOGE[0],DOGE[1],DOGE[2],DOGE[3])}
            </View>
        )
    };
}

const styles = {
    View:{
        padding: 16,
        backgroundColor: ''
    }
}

export default CoinList;