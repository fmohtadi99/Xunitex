import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Snackbar, TouchableRipple } from '../Material';
import { Icons, Settings, Themes } from '../../Resources/index';
import { SvgUri, SvgXml } from 'react-native-svg';
import { Fingerprint, Pincode, Pattern, Passcode } from './';

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

    constructor(props) {
        super(props);
        StatusBar.setBackgroundColor('transparent');
    }

    debugClick() {
        alert('OK');
    }

    checkUserLocks(Locks, Icon, Todo) {

        switch (Locks) {
            case "Enabled":
                return (<TouchableRipple onPress={Todo} borderless style={{ margin: 2, padding: scale(5), width: scale(28), height: scale(28), borderRadius: scale(18), borderColor: Themes.Colors[CurrentTheme].Primary, borderWidth: scale(1) }} >
                    <SvgUri fill={Themes.Colors[CurrentTheme].Primary} width={"100%"} height={"100%"} uri={Icon} />
                </TouchableRipple>);
                break;
            case "Disabled":
                return (<TouchableRipple style={{ margin: 2, padding: scale(5), width: scale(28), height: scale(28), borderRadius: scale(18), backgroundColor: Themes.Colors[CurrentTheme].TextHighlight }} >
                    <SvgUri fill={Themes.Colors[CurrentTheme].TextSecondary} width={"100%"} height={"100%"} uri={Icon} />
                </TouchableRipple>);
                break;
            case "Active":
                return (<TouchableRipple style={{ margin: 2, padding: scale(5), width: scale(28), height: scale(28), borderRadius: scale(18), backgroundColor: Themes.Colors[CurrentTheme].Primary }} >
                    <SvgUri fill={"#fff"} width={"100%"} height={"100%"} uri={Icon} />
                </TouchableRipple>);
                break;
        }
    }

    loadUserLock(Lock) {
        switch (Lock) {
            case "Fingerprint":
                return <Fingerprint />
                break;
            case "Pincode":
                return <Pincode />
                break;
            case "Pattern":
                return <Pattern />
                break;
            case "Passcode":
                return <Passcode />
                break;
        }
    }

    setUserLock(Lock){

    }

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

                <View style={Styles.SectionLocks}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        {this.checkUserLocks(Locks.Fingerprint, Icons.Fingerprint.filled, () =>this.setUserLock("Fingerprint"))}
                        {this.checkUserLocks(Locks.Pincode, Icons.Pincode.filled, () =>this.setUserLock("Pincode"))}
                        {this.checkUserLocks(Locks.Pattern, Icons.Pattern.filled, () =>this.setUserLock("Pattern"))}
                        {this.checkUserLocks(Locks.Passcode, Icons.Passcode.filled, () =>this.setUserLock("Passcode"))}
                    </View>
                </View>

                <View>
                    {this.loadUserLock(this.state.Lock)}
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
        marginBottom: scale(16)
    },
    SectionLocks: {
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
