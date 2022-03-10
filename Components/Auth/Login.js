import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextInput, Snackbar } from '../Material';
import { Settings, Themes } from '../../Resources/index';

let CurrentTheme = Settings.CurrentTheme;

class Login extends Component {

    state = {
        email: '', password: '', secureTextEntry: true,
        emailEnabled: true, passwordEnabled: true,
        passwordError: false, emailError: false,
        message: '', messageColor: Themes.Colors[CurrentTheme].Blue,
        popUp: false, loading: false
    };

    constructor (props){
        super(props);
        StatusBar.setTranslucent(true);
    }

    onLoginPress() {
        const { email, password } = this.state;
        if (email == '') {
            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Email field is empty!');
            this.setState({ emailError: true });
        } else if (password == '') {
            this.sendPopUp(Themes.Colors[CurrentTheme].Red, 'Password field is empty!');
            this.setState({ passwordError: true });
        } else {
            this.setState({ loading: true, emailEnabled: false, passwordEnabled: false });
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
                    this.setState({ loading: false, emailEnabled: true, passwordEnabled: true });
                });
        }
    }

    sendPopUp(color, message) {
        this.setState({ popUp: true, messageColor: color, message });
    }

    clearError() {
        this.setState({ passwordError: false, emailError: false, popUp: false });
    }

    onNeedHelpPress() {

    }

    render() {
        return (
            <View style={Styles.View}>
                <View style={Styles.SectionLabel}>
                    <Text style={{
                        color: Themes.Colors[CurrentTheme].Secondary,
                        fontSize: 48,
                        fontFamily: Themes.Fonts[CurrentTheme].Bold,
                        textAlign: 'center'
                    }}>Xunitex</Text>

                    <Text style={{
                        color: Themes.Colors[CurrentTheme].SecondaryLight,
                        fontSize: 18,
                        fontFamily: Themes.Fonts[CurrentTheme].Light,
                        textAlign: 'center',
                        marginTop: -8
                    }}>Light • Fast • Smart</Text>
                </View>

                <View style={Styles.SectionInput}>
                    <TextInput
                        label="Email"
                        left={
                            <TextInput.Icon
                                disabled
                                color={Themes.Colors[CurrentTheme].PrimaryDark}
                                icon="account"
                            />
                        }
                        right={
                            <TextInput.Icon
                                color={Themes.Colors[CurrentTheme].PrimaryLight}
                                icon="backspace"
                                onPress={() =>
                                    this.setState({ email: '' })
                                }
                            />
                        }
                        editable={this.state.emailEnabled}
                        value={this.state.email}
                        underlineColor={Themes.Colors[CurrentTheme].PrimaryLight}
                        activeUnderlineColor={Themes.Colors[CurrentTheme].Primary}
                        error={this.state.emailError}
                        onChangeText={email => { this.setState({ email }); this.clearError() }}
                        placeholder="user@domain.com" placeholderTextColor={Themes.Colors[CurrentTheme].TextSecondary}
                        style={Styles.Email} />

                    <TextInput
                        label="Password"
                        left={
                            <TextInput.Icon
                                disabled
                                color={Themes.Colors[CurrentTheme].PrimaryDark}
                                icon="key" />
                        }
                        right={
                            <TextInput.Icon
                                color={Themes.Colors[CurrentTheme].PrimaryLight}
                                icon="eye"
                                onPress={() =>
                                    this.setState({ secureTextEntry: !(this.state.secureTextEntry) })
                                } />
                        }
                        editable={this.state.passwordEnabled}
                        value={this.state.password}
                        underlineColor={Themes.Colors[CurrentTheme].PrimaryLight}
                        activeUnderlineColor={Themes.Colors[CurrentTheme].Primary}
                        error={this.state.passwordError}
                        secureTextEntry={this.state.secureTextEntry}
                        onChangeText={password => { this.setState({ password }); this.clearError() }}
                        placeholder="••••••••" placeholderTextColor={Themes.Colors[CurrentTheme].TextSecondary} style={Styles.Password} />

                    <Button
                        loading={this.state.loading}
                        mode="contained"
                        onPress={this.onLoginPress.bind(this)}
                        labelStyle={Styles.Login}
                        style={{ marginBottom: 16, backgroundColor: Themes.Colors[CurrentTheme].Primary }}>Login</Button>

                    <Button
                        onPress={this.onNeedHelpPress.bind(this)}
                        color={Themes.Colors[CurrentTheme].Primary}
                        labelStyle={Styles.NeedHelp}>Need Help?</Button>
                </View>

                <Snackbar
                    style={{ backgroundColor: this.state.messageColor }}
                    duration={3000}
                    onDismiss={() => this.setState({ popUp: false })}
                    visible={this.state.popUp}>{this.state.message}</Snackbar>
            </View>
        )
    }
}

const Styles = {
    View: {
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: 'center',
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    Email: {
        width: "100%",
        backgroundColor: Themes.Colors[CurrentTheme].TextHighlight,
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
        marginBottom: 8
    },
    Password: {
        width: "100%",
        backgroundColor: Themes.Colors[CurrentTheme].TextHighlight,
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
        marginBottom: 48
    },
    Login: {
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: Themes.Fonts[CurrentTheme].SizeRegular,
        textTransform: 'capitalize',
        letterSpacing: .5
    },
    NeedHelp: {
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: Themes.Fonts[CurrentTheme].SizeSmall,
        textTransform: 'capitalize',
        color: Themes.Colors[CurrentTheme].Primary,
        letterSpacing: .5
    }
}

export { Login };