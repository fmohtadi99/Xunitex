import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Login, Unlock } from "./";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import fs from 'react-native-fs';

class Authentication extends Component {

    state = { userLoggedIn: null };

    constructor(props) {
        super(props);

        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                this.setState({ userLoggedIn: true });
            } else {
                this.setState({ userLoggedIn: false });
            };
        });

        fs.readFile(fs.DocumentDirectoryPath+'/Settings.json')
        .then((contents)=>{
            this.setState({userLoggedIn: JSON.parse(contents).LoggedIn});
        });
    }

    renderContent() {
        if (this.state.userLoggedIn) {
            return <Unlock />
        } else {
            return <Login />
        }

    }

    render() {
        return (
            <View>
                {this.renderContent()}
            </View>
        )
    }
}

export { Authentication };