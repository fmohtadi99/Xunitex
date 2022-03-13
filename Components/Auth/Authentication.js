import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { Welcome, Unlock } from "./";
import fs from 'react-native-fs';
import { Home } from "../Home/Home";

let UserJSON = '';

class Authentication extends Component {

    state = { UserID: null }

    constructor(props) {
        super(props);
        StatusBar.setBackgroundColor('transparent');
    }

    nextLevel() {
        fs.exists(fs.DocumentDirectoryPath + '/User.ID')
            .then((res) => { 
                this.setState({ UserID: res });
                fs.readFile(fs.DocumentDirectoryPath+'/User.ID')
                .then((res)=>{UserJSON = JSON.parse(res)})
             });

        switch (this.state.UserID) {
            case true:
                if (UserJSON.Fingerprint || UserJSON.Pattern || UserJSON.Pincode || UserJSON.Passcode) {
                    return (<Unlock />);
                } else {
                    return (<Home />);
                }
                
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