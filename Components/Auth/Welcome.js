import React, { Component } from 'react';
import { View, Button } from 'react-native';

import { Login } from './';

class Welcome extends Component {

    state = { tutorial: false }

    constructor(props) {
        super(props);
    }

    nextLevel() {
        if (this.state.tutorial) {
            return (<Login />);
        } else {
            return (
                <Button mode="contained" onPress={() => this.setState({ tutorial: true })} title="Skip >>>" />
            );
        };
    }

    render() {
        return (
            <View>
                {this.nextLevel()}
            </View>
        )
    }
}

export { Welcome };