import React from "react";
import { View, Text } from 'react-native';
import { SvgUri, SvgXml } from "react-native-svg";

const iconRight = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#262A2E"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>';


const Card = (props) => {

    return(
        <View style={styles.cardStyle}>
            <View style={styles.cardCoinInfoStyle}>
                <SvgUri style={styles.coinIconStyle} width="100%" height="100%" uri={props.coinIconURI}/>  
            </View>

            <View style={styles.cardTextStyle}>
                <View style={styles.coinNameGroupStyle}>
                    <Text style={styles.coinSymbolStyle}>{props.coinSymbol}</Text>
                    <Text style={styles.coinNameStyle}>{props.coinName}</Text>
                </View>
                <Text style={styles.currentPriceStyle}>{props.currentPrice + ' USDT'}</Text>
            </View>

            <View style={styles.cardInterestStyle}>
                <Text style={styles.currentInterestStyle}>{props.currentInterest + ' %'}</Text>
            </View>

            <View style={styles.cardIconStyle}>
                <SvgXml width="100%" height="100%" xml={iconRight} />
            </View>
        </View>
    );
};

const styles = {
    cardStyle: {
        height: 80,
        width: '100%',
        padding: 12,
        paddingRight:8,
        backgroundColor: '#ECEFF1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 8
    },
    cardCoinInfoStyle: {
        height: 52,
        width: 52,
        marginRight: 12
    },
    cardTextStyle:{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    cardInterestStyle:{
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#000',
        paddingLeft:8,
        paddingRight: 8
    },
    cardIconStyle:{
        width: 24,
        height: 24,
    },
    coinSymbolStyle : {
        color: '#262A2E',
        fontFamily: 'Roboto-Medium',
        fontSize: 18
    },
    coinNameStyle : {
        color: '#262A2E',
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 18
    },
    coinNameGroupStyle:{
        display:'flex',
        flexDirection: 'row'
    },
    currentPriceStyle: {
        color: '#262A2E',
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 16
    },
    coinIconStyle:{
        width:"100%",
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    currentInterestStyle:{
        color: '#000',
        fontFamily: 'RobotoCondensed-Bold',
        fontSize: 20
    }
}

export default Card;