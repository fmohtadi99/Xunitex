import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button, IconButton, TextInput, Snackbar } from '../Material';
import { Settings, Themes } from '../../Resources/index';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { SvgXml } from 'react-native-svg';

let CurrentTheme = Settings.CurrentTheme;
let Locks = Settings.Locks;

class Unlock extends Component {

    state = {
        Lock: Settings.UserLock,
        email: '', password: '', secureTextEntry: true,
        Enabled: true, eyeIcon: 'eye-off',
        passwordError: false, emailError: false,
        message: '', messageColor: Themes.Colors[CurrentTheme].Blue,
        popUp: false, loading: false
    };

    debugClick() {
        alert('OK');
    }

    // checkUserLocks(Locks, Icon, Todo) {
    //     switch (Locks) {
    //         case true:
    //             return <Button compact mode="contained" color={Themes.Colors[CurrentTheme].TextHighlight} style={{ backgroundColor: Themes.Colors[CurrentTheme].Primary }} onTouchEnd={Todo}>
    //                 <SvgXml xml={"<svg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><g><path d='M0,0h24v24H0V0z' fill='none'/></g><g><g><path d='M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M7.64,15H6.49v-4.5l-0.9,0.66 l-0.58-0.89L6.77,9h0.87V15z M13.5,15H9.61v-1.02c1.07-1.07,1.77-1.77,2.13-2.15c0.4-0.42,0.54-0.69,0.54-1.06 c0-0.4-0.31-0.72-0.81-0.72c-0.52,0-0.8,0.39-0.9,0.72l-1.01-0.42c0.01-0.02,0.18-0.76,1-1.15c0.69-0.33,1.48-0.2,1.95,0.03 c0.86,0.44,0.91,1.24,0.91,1.48c0,0.64-0.31,1.26-0.92,1.86c-0.25,0.25-0.72,0.71-1.4,1.39l0.03,0.05h2.37V15z M18.75,14.15 C18.67,14.28,18.19,15,16.99,15c-0.04,0-1.6,0.08-2.05-1.51l1.03-0.41c0.03,0.1,0.19,0.86,1.02,0.86c0.41,0,0.89-0.28,0.89-0.77 c0-0.55-0.48-0.79-1.04-0.79h-0.5v-1h0.46c0.33,0,0.88-0.14,0.88-0.72c0-0.39-0.31-0.65-0.75-0.65c-0.5,0-0.74,0.32-0.85,0.64 l-0.99-0.41C15.2,9.9,15.68,9,16.94,9c1.09,0,1.54,0.64,1.62,0.75c0.33,0.5,0.28,1.16,0.02,1.57c-0.15,0.22-0.32,0.38-0.52,0.48 v0.07c0.28,0.11,0.51,0.28,0.68,0.52C19.11,12.91,19.07,13.66,18.75,14.15z'/></g></g></svg>"}/>
    //                 Hello</Button>
    //             break;
    //         case false:
    //             return <Avatar.Icon compact mode="contained" size={scale(28)} color={Themes.Colors[CurrentTheme].TextHighlight} style={{ backgroundColor: Themes.Colors[CurrentTheme].Primary }} onTouchEnd={Todo} icon={Icon} />
    //             break;
    //     }

    // }


    render() {
        return (
            <View style={Styles.View}>
                <View style={Styles.SectionLabel}>
                    <Text style={{
                        color: Themes.Colors[CurrentTheme].TextHighlight,
                        fontSize: scale(48),
                        fontFamily: Themes.Fonts[CurrentTheme].Bold,
                        textAlign: 'center'
                    }}>Xunitex</Text>

                    <Text style={{
                        color: Themes.Colors[CurrentTheme].TextHighlight,
                        fontSize: scale(18),
                        fontFamily: Themes.Fonts[CurrentTheme].Light,
                        textAlign: 'center',
                        marginTop: -8
                    }}>Light • Fast • Smart</Text>
                </View>

                <View style={Styles.SVG}>
                    <SvgXml width={"100%"} height={"100%"} xml={'<svg width="360" height="19" viewBox="0 0 360 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.458488V4.41275C30.3828 12.8705 99.5438 18.778 180 18.778C260.456 18.778 329.617 12.8705 360 4.41277V0.458488H0Z" fill="#455A64"/></svg>'} />
                </View>

                <View style={Styles.SectionInput}>
                    <IconButton compact mode="contained" color={Themes.Colors[CurrentTheme].TextHighlight} style={{ backgroundColor: Themes.Colors[CurrentTheme].Primary }} icon={
                        <SvgXml fill={'red'} width={"100%"} height={"100%"} xml={"<svg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><g><path d='M0,0h24v24H0V0z' fill='none'/></g><g><g><path d='M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M7.64,15H6.49v-4.5l-0.9,0.66 l-0.58-0.89L6.77,9h0.87V15z M13.5,15H9.61v-1.02c1.07-1.07,1.77-1.77,2.13-2.15c0.4-0.42,0.54-0.69,0.54-1.06 c0-0.4-0.31-0.72-0.81-0.72c-0.52,0-0.8,0.39-0.9,0.72l-1.01-0.42c0.01-0.02,0.18-0.76,1-1.15c0.69-0.33,1.48-0.2,1.95,0.03 c0.86,0.44,0.91,1.24,0.91,1.48c0,0.64-0.31,1.26-0.92,1.86c-0.25,0.25-0.72,0.71-1.4,1.39l0.03,0.05h2.37V15z M18.75,14.15 C18.67,14.28,18.19,15,16.99,15c-0.04,0-1.6,0.08-2.05-1.51l1.03-0.41c0.03,0.1,0.19,0.86,1.02,0.86c0.41,0,0.89-0.28,0.89-0.77 c0-0.55-0.48-0.79-1.04-0.79h-0.5v-1h0.46c0.33,0,0.88-0.14,0.88-0.72c0-0.39-0.31-0.65-0.75-0.65c-0.5,0-0.74,0.32-0.85,0.64 l-0.99-0.41C15.2,9.9,15.68,9,16.94,9c1.09,0,1.54,0.64,1.62,0.75c0.33,0.5,0.28,1.16,0.02,1.57c-0.15,0.22-0.32,0.38-0.52,0.48 v0.07c0.28,0.11,0.51,0.28,0.68,0.52C19.11,12.91,19.07,13.66,18.75,14.15z'/></g></g></svg>"} />}
                        />
                </View>

                <Snackbar
                    style={{ backgroundColor: this.state.messageColor }}
                    duration={5000}
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
        alignItems: 'center'
    },
    SectionLabel: {
        width: "100%",
        height: "30%",
        backgroundColor: Themes.Colors[CurrentTheme].Secondary,
        paddingBottom: scale(16),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    SVG: {
        width: "100%",
        height: 22,
        marginTop: -2,
        marginBottom: 48
    },
    SectionInput: {
        width: "80%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: scale(18)
    },
    Email: {
        width: "100%",
        backgroundColor: Themes.Colors[CurrentTheme].TextHighlight,
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: scale(Themes.Fonts[CurrentTheme].SizeRegular),
        marginBottom: 8
    },
    Password: {
        width: "100%",
        backgroundColor: Themes.Colors[CurrentTheme].TextHighlight,
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: scale(Themes.Fonts[CurrentTheme].SizeRegular),
        marginBottom: 48
    },
    Login: {
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: scale(Themes.Fonts[CurrentTheme].SizeRegular),
        textTransform: 'capitalize',
        letterSpacing: .5
    },
    NeedHelp: {
        fontFamily: Themes.Fonts[CurrentTheme].Regular,
        fontSize: scale(Themes.Fonts[CurrentTheme].SizeSmall),
        textTransform: 'capitalize',
        color: Themes.Colors[CurrentTheme].Primary,
        letterSpacing: .5
    }
}

export { Unlock };
