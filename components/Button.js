import React from "react";
import { View, Text } from 'react-native';

var buttonWidth = 10;

const Button = (props) => {

    return(
        <View style={styles.buttonStyle}>
            <Text style={styles.captionStyle}>{props.buttonCaption}</Text>
        </View>
    );
};

const styles = {
    buttonStyle: {
        height: 40,
        width: '100%',
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: '#455A64',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32

    },
    captionStyle : {
        color: '#ECEFF1',
        fontFamily: 'Roboto-Regular'
    }
}

export default Button;