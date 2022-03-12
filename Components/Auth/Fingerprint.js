import React from "react";
import { Button } from 'react-native';
import fs from 'react-native-fs'

const Fingerprint = () => {
    return (
        <Button onPress={() => {
            fs.unlink(fs.DocumentDirectoryPath+'/settings.json')
                .then(() => alert('deleted'))
                .catch((err) => {
                    alert(err.message);
                })}}

            title={"Clear Data"} />
    )

}

export { Fingerprint };
