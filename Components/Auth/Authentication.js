import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Login, Unlock } from "./";
import fs from 'react-native-fs';

class Authentication extends Component {

    state = { UserID: null }

    constructor(props) {
        super(props);
    }

    nextLevel() {
        fs.exists(fs.DocumentDirectoryPath + '/User.ID')
            .then((res) => { this.setState({ UserID: res }) });

        switch (this.state.UserID) {
            case true:
                return (<Unlock />);
                break;
            case false:
                return (<Login />);
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