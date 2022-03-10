import React, { Component } from "react";
import { View, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextInput, Snackbar } from '../Material';
import { Settings, Themes } from '../../Resources/index';

let CurrentTheme = Settings.CurrentTheme;

class Login extends Component {

    state = { email: '', password: '', passwordError: false, emailError: false, message: '', messageColor: Themes.Colors[CurrentTheme].Blue, popUp: false, loading: false };


    onLoginPress() {
        const { email, password } = this.state;
        if (email == '') {
            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Email field is empty!');
            this.setState({ emailError: true });
        } else if (password == '') {
            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Password field is empty!');
            this.setState({ passwordError: true });
        } else {
            this.setState({ loading: true });
            signInWithEmailAndPassword(getAuth(), email, password)
                .then((userCredential) => {
                    this.sendPopUp(Themes.Colors[CurrentTheme].Green, 'Logged in :)');
                    this.setState({ loading: false })
                })
                .catch((error) => {
                    this.setState({ popUp: true, messageColor: Themes.Colors[CurrentTheme].Red });
                    switch (error.code) {
                        case "auth/user-not-found":
                            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'No user found. Check your Email and try again!');
                            break;
                        case "auth/invalid-email":
                            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Invalid Email. Try again!');
                            this.setState({ emailError: true });
                            break;
                        case "auth/wrong-password":
                            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Invalid Password. Try again!');
                            this.setState({ passwordError: true });
                            break;
                        case "auth/too-many-requests":
                            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Too many requests. Come back later :(');
                            this.setState({ passwordError: true });
                            break;
                    };
                    this.setState({ loading: false });
                    alert(error.code);
                })

        }

    }

    sendPopUp(color, message) {
        this.setState({ popUp: true, messageColor: color, message });
    }

    clearError() {
        this.setState({ passwordError: false, emailError: false, popUp: false });
    }

    needHelp() {
        
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
                    <TextInput label="Email" value={this.state.email} underlineColor={Themes.Colors[CurrentTheme].Primary} activeUnderlineColor={Themes.Colors[CurrentTheme].Primary} error={this.state.emailError} onChangeText={email => { this.setState({ email }); this.clearError() }} placeholder="user@domain.com" UnderlineColor="transparent" style={{
                        width: "100%",
                        textAlign: 'center',
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
                        marginBottom: 8,
                    }} />
                    <TextInput label="Password" value={this.state.password} underlineColor={Themes.Colors[CurrentTheme].Primary} activeUnderlineColor={Themes.Colors[CurrentTheme].Primary} error={this.state.passwordError} secureTextEntry onChangeText={password => { this.setState({ password }); this.clearError() }} placeholder="••••" style={{
                        width: "100%",
                        textAlign: 'center',
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
                        marginBottom: 48
                    }} />
                    <Button loading={this.state.loading} mode="contained" onPress={this.onLoginPress.bind(this)} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeRegular,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8, backgroundColor: Themes.Colors[CurrentTheme].Primary }}>Login</Button>
                    <Button onPress={this.needHelp()} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeSmall,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Create new account</Button>
                    <Button onPress={this.needHelp()} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeSmall,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Need Help?</Button>
                </View>
                <Snackbar style={{ backgroundColor: this.state.messageColor }} duration={3000} onDismiss={() => this.setState({ popUp: false })} visible={this.state.popUp}>{this.state.message}</Snackbar>
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
        width: "80%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18
    }
}

export { Login };