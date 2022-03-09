import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Auth } from './Components/Auth';
import { Settings, Themes } from './Resources/index';

let CurrentTheme = Settings.CurrentTheme;

class App extends Component {
    render() {
        return (
            <View style={Styles.View}>
                <Auth />
            </View>
        )
    }
}

const Styles = {
    View: {
        height: "100%",
        width: "100%",
        backgroundColor: Themes.Colors[CurrentTheme].AppBackground
    }
}
export default App;