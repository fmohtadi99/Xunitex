import React, { Component } from "react";
import { View, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextInput } from '../Material';
import { Settings, Themes } from '../../Resources/index';

let CurrentTheme = Settings.CurrentTheme;

class Login extends Component {

    state = { email: '', password: '' };

    onLoginPress() {
        const { email, password } = this.state;
        signInWithEmailAndPassword(getAuth, email, password)
             .catch(()=>{alert('Wrong Information')});
    }

    render() {
        return (
            <View style={Styles.View}>
                <View style={Styles.SectionLabel}>
                    <Text style={{
                        color: Themes.Colors[CurrentTheme].TextPrimary,
                        fontSize: 48,
                        fontFamily: Themes.Fonts[CurrentTheme].Bold,
                        textAlign: 'center'
                    }}>Xunitex</Text>
                    <Text style={{
                        color: Themes.Colors[CurrentTheme].TextSecondary,
                        fontSize: 18,
                        fontFamily: Themes.Fonts[CurrentTheme].Light,
                        textAlign: 'center',
                        marginTop: -8
                    }}>Light • Fast • Smart</Text>
                </View>

                <View style={Styles.SectionInput}>
                    <TextInput label="Email" onChangeText={email => this.setState({ email })} placeholder="user@domain.com" UnderlineColor="transparent" style={{
                        width: "100%",
                        textAlign: 'center',
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
                        marginBottom: 8,
                    }} />
                    <TextInput label="Password" secureTextEntry onChangeText={password => this.setState({ password })} placeholder="••••" style={{
                        width: "100%",
                        textAlign: 'center',
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
                        marginBottom: 48
                    }} />
                    <Button mode="contained" onPress={this.onLoginPress.bind(this)} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeRegular,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Login</Button>
                    <Button onPress={() => { alert(this.state.email + this.state.password) }} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeSmall,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Need Help?</Button>
                </View>
            </View>
        )
    }
}

const Styles = {
    View: {
        width: "100%",
        height: "100%",
        alignItems: 'center'
    },
    SectionLabel: {
        width: "100%",
        padding: 56,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SectionInput: {
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18
    }
}

export { Login };