import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.HeaderStyle}>
            <Text style={styles.textStyle}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = {
    HeaderStyle: {
        height: 56,
        backgroundColor: '#455A64',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#ECEFF1',
        fontFamily: "Roboto-Regular"
    }
};

export default Header;