import React , { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const styles = {
    coinSection: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16
    },
    coinIconBorder: {  
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 50,
        borderColor: 'red',
        marginRight: 8,
        borderWidth: 3
    },
    coinIcon: {  
        width: 85,
        height: 85,
        backgroundImage: 'url("https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/color/btc.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        
        borderRadius: 42.5
    },
    coinData: {
        position: 'relative',
        flexShrink: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 100
    },
    coinDataTop: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'        
    },
    coinFullName:{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    coinNowIntrstBrdr:{
        position: 'relative',
        borderRadius:5,
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 5,
        paddingRight: 5
    },
    coinDataBottom: {
        position: 'relative',
    },
    coinTitle: {
        fontSize: 20,
        color: '#262A2E',
        fontFamily: "RobotoCondensed-Regular"
    },
    coinName: {
        fontSize: 20,
        color: '#262A2E',
        fontFamily: "RobotoCondensed-Bold"
    },
    coinNowUSDT: {
        fontSize: 24,
        color: '#262A2E',
        fontFamily: "RobotoCondensed-Bold"
    },
    coinNowIRT: {
        fontSize: 16,
        color: '#262A2E',
        fontFamily: "RobotoCondensed-Bold"
    },
    coinNowIntrst: {
        fontSize: 16,
        color: '#262A2E',
        fontFamily: "Roboto-Bold"
    }
};
global.xCoinCur = 10;

class CoinInfo extends Component {
    state = { xCoinData: [] };

    componentDidMount(){
        xCoinCur = 300;
    }

        constructor(props) {
            super(props);
            let url="https://api.nobitex.ir/market/stats";
            axios.post(url, {srcCurrency:"btc",dstCurrency:"rls"})
                .then( function (response) {
                
                    console.log(xCoinCur);
                });
        }

    renderxCoinNowIRT() {
        return <Text style={ styles.coinNowIRT }>{xCoinCur}</Text>;
    }

    render() {
        const { coinSection, coinIconBorder, coinIcon,
            coinData, coinDataTop, coinDataBottom,
            coinFullName, coinName, coinTitle, coinNowIntrstBrdr,
            coinNowIntrst, coinNowUSDT,coinNowIRT } = styles;
        
        console.log(xCoinCur);
        return (
            <View style={coinSection}>
                <View style={coinIconBorder}>
                    <View style={coinIcon}>
                    
                    </View>
                </View>
                <View style={coinData}>
                    <View style={coinDataTop}>
                        <View style={coinFullName}>
                            <Text style={coinName}>BTC</Text>
                            <Text style={coinTitle}>: Bitcoin</Text>
                        </View>
                        <View style={coinNowIntrstBrdr}>
                            <Text style={coinNowIntrst}>+100%</Text>
                        </View>
                    </View>
                    <View style={coinDataBottom}>
                        {this.renderxCoinNowIRT()}
                    </View>
                </View>
            </View>
        );
    }
}

export default CoinInfo;