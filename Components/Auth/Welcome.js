import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Login, Tutorial } from './';

class Welcome extends Component {

    state = { tutorial: false };

    constructor(props) {
        super(props);
    }

    nextLevel() {
        if (this.state.tutorial) {
            return (<Login />);
        } else {
            return (<Tutorial />);
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