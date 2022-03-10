import React, { Component } from "react";
import { View, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, TextInput, Snackbar } from '../Material';
import { Settings, Themes } from '../../Resources/index';

let CurrentTheme = Settings.CurrentTheme;

class Login extends Component {

    state = { email: '', password: '', passwordError: false, emailError: false, errorMessage: '', error: false, loading: false };

    onLoginPress() {
        this.setState({ loading: true });
        const { email, password } = this.state;
        signInWithEmailAndPassword(getAuth(), email, password)
            .catch((error) => {
                this.setState({ error: true });
                switch (error.code) {
                    case "auth/wrong-email":
                        this.setState({ passwordError: true, errorMessage: 'Invalid Email. Try again!' });
                        break;
                    case "auth/wrong-password":
                        this.setState({ passwordError: true, errorMessage: 'Invalid Password. Try again!' });
                        break;
                }

            })
            .then(() => this.setState({ loading: false }));
    }

    clearError() {
        this.setState({ passwordError: false, emailError: false, errorMessage: '' });
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
                    <TextInput label="Email" value={this.state.email} error={this.state.emailError} onChangeText={email => { this.setState({ email }); this.clearError() }} placeholder="user@domain.com" UnderlineColor="transparent" style={{
                        width: "100%",
                        textAlign: 'center',
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
                        marginBottom: 8,
                    }} />
                    <TextInput label="Password" value={this.state.password} error={this.state.passwordError} secureTextEntry onChangeText={password => { this.setState({ password }); this.clearError() }} placeholder="••••" style={{
                        width: "100%",
                        textAlign: 'center',
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeBold,
                        marginBottom: 48
                    }} />
                    <Text style={{ marginBottom: 12 }}>{this.state.errorMessage}</Text>
                    <Button loading={this.state.loading} mode="contained" onPress={this.onLoginPress.bind(this)} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeRegular,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Login</Button>
                    <Button onPress={this.needHelp()} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeSmall,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Need Help?</Button>
                    <Button onPress={this.needHelp()} labelStyle={{
                        fontFamily: Themes.Fonts[CurrentTheme].Regular,
                        fontSize: Themes.Fonts[CurrentTheme].SizeSmall,
                        textTransform: 'capitalize'
                    }}
                        style={{ marginBottom: 8 }}>Need Help?</Button>
                </View>
                <Snackbar style={Styles.Snackbar} duration={5000} visible={this.state.error}>{this.state.errorMessage}</Snackbar>
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
    },
    Snackbar: {
        flex: 1,
        justifyContent: 'space-between'
    }
}

export { Login };