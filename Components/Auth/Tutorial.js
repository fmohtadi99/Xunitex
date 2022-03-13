import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Welcome } from './Welcome';

const Tutorial = () => {


    return (
        <View style={{ marginTop: 50 }}>
            <Button mode="contained" onPress={() => this.setState({ tutorial: true })} title="Skip >>>" />
        </View>
    );



}

export { Tutorial };