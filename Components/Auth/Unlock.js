import React from "react";
import {View, Text} from 'react-native';
import { Button } from "react-native-paper";
import { scale } from "react-native-size-matters";
import { UserLogout } from "../../Functions/Firebase";

const Unlock = () => {
    return (
        <View>
            <Button mode="contained" style={{marginTop: scale(50)}} onPress={()=>UserLogout()}>Unlock</Button>
        </View>
    )
}

export {Unlock};