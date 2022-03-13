import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { Welcome, Unlock } from "./";
import fs from 'react-native-fs';

class Authentication extends Component {

    state = { UserID: null }

    constructor(props) {
        super(props);
        StatusBar.setBackgroundColor('transparent');
    }

    nextLevel() {
        fs.exists(fs.DocumentDirectoryPath + '/User.ID')
            .then((res) => { this.setState({ UserID: res }) });

        switch (this.state.UserID) {
            case true:
                return (<Unlock />);
                break;
            case false:
                return (<Welcome />);
                break;
        }
    }

    render() {
        return (
            <View>
                {this.nextLevel()}
            </View>
        )
    }
}

export { Authentication };