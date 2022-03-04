import React from "react";
import { Text, View } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.NavigationBar}>
            <Text>Nav</Text>
        </View>
    );
};

const styles = {
    NavigationBar: {
        width: '100%',
        height: 56,
        backgroundColor: 'blue',
        position: "static",
        bottom: 0
    }
};
export default NavBar;