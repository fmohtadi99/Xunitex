import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { initializeApp } from "firebase/app";
import { Auth } from './Components/Auth';
import { Settings, Themes } from './Resources/index';

let CurrentTheme = Settings.CurrentTheme;

class App extends Component {

    constructor(props) {
        super(props);

        StatusBar.setTranslucent(true);

        const firebaseConfig = {
            apiKey: "AIzaSyALSS2BFAvvY3VRr5aYxnflkz2zF7cbwoY",
            authDomain: "xu-xunitex.firebaseapp.com",
            projectId: "xu-xunitex",
            storageBucket: "xu-xunitex.appspot.com",
            messagingSenderId: "25494973366",
            appId: "1:25494973366:web:82aeeb911aa88f62846f17",
            measurementId: "G-0T953FZJ0L"
        };

        const app = initializeApp(firebaseConfig);

    }

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