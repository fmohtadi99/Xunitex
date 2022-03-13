import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Login, Unlock } from "./";
import fs from 'react-native-fs';

class Authentication extends Component {


    constructor(props) {
        super(props);
    }

    nextLevel() {
        fs.readFile(fs.DocumentDirectoryPath + '/User.ID')
            .then(() => { return <Unlock /> })
            .catch(() => { return <Login /> });
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