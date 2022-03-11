import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Login } from "./Login";
import { Unlock } from "./Unlock";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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