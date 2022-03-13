import React, { Component } from "react";
import { View, Text, StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Button, Snackbar, ToggleButton, TouchableRipple } from '../Material';
import { Icons, Settings, Themes } from '../../Resources/index';
import { SvgUri, SvgXml } from 'react-native-svg';
import { Fingerprint, Pincode, Pattern, Passcode } from './';
import fs from 'react-native-fs';

let CurrentTheme = Settings.CurrentTheme;
let UserID = '';

class Unlock extends Component {



    state = {
        LockPasscode: null, LockPattern: null, LockPattern: null, LockFingerprint: null
    };

    constructor(props) {
        super(props);

        fs.readFile(fs.DocumentDirectoryPath + '/User.ID')
            .then((res) => {
                UserID = JSON.parse(res);
                this.setState({
                    LockPasscode: UserID.LockPasscode,
                    LockPattern: UserID.LockPasscode,
                    LockPattern: UserID.LockPasscode,
                    LockFingerprint: UserID.LockPasscode
                })
            });
    }

    debugClick() {
        alert('OK');
    }

    checkUserLocks(Locks, Icon, Todo) {

        switch (Locks) {
            case "Enabled":
                return (<TouchableRipple onPress={Todo} borderless style={{ margin: 2, padding: scale(5), width: scale(28), height: scale(28), borderRadius: scale(18), borderColor: Themes.Colors[CurrentTheme].PrimaryLight, borderWidth: scale(1.5) }} >
                    <SvgUri fill={Themes.Colors[CurrentTheme].Primary} width={"100%"} height={"100%"} uri={Icon} />
                </TouchableRipple>);
                break;

            case "Active":
                return (<TouchableRipple style={{ margin: 2, padding: scale(5), width: scale(28), height: scale(28), borderRadius: scale(18), backgroundColor: Themes.Colors[CurrentTheme].Primary }} >
                    <SvgUri fill={Themes.Colors[CurrentTheme].TextHighlight} width={"100%"} height={"100%"} uri={Icon} />
                </TouchableRipple>);
                break;

            default:
                return (<TouchableRipple style={{ margin: 2, padding: scale(5), width: scale(28), height: scale(28), borderRadius: scale(18), backgroundColor: Themes.Colors[CurrentTheme].TextHighlight }} >
                    <SvgUri fill={Themes.Colors[CurrentTheme].TextSecondary} width={"100%"} height={"100%"} uri={Icon} />
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

    toggleUserIDLocks(){
        !(UserID.Fingerprint);
        !(UserID.Fingerprint);
        !(UserID.Fingerprint);
        !(UserID.Fingerprint);
    }

    setUserLock(Lock) {
        this.setState({ Lock });
        Settings.UserLock = Lock;

        switch (Lock) {

            case "Fingerprint":
                UserID.Fingerprint = true;
                if (Settings.Locks.Pincode == "Active") { Settings.Locks.Pincode = "Enabled" };
                if (Settings.Locks.Pattern == "Active") { Settings.Locks.Pattern = "Enabled" };
                if (Settings.Locks.Passcode == "Active") { Settings.Locks.Passcode = "Enabled" };
                Settings.Locks.Fingerprint = "Active";
                break;
            case "Pincode":
                if (Settings.Locks.Fingerprint == "Active") { Settings.Locks.Fingerprint = "Enabled" };
                if (Settings.Locks.Pattern == "Active") { Settings.Locks.Pattern = "Enabled" };
                if (Settings.Locks.Passcode == "Active") { Settings.Locks.Passcode = "Enabled" };
                Settings.Locks.Pincode = "Active";
                break;
            case "Pattern":
                if (Settings.Locks.Pincode == "Active") { Settings.Locks.Pincode = "Enabled" };
                if (Settings.Locks.Fingerprint == "Active") { Settings.Locks.Fingerprint = "Enabled" };
                if (Settings.Locks.Passcode == "Active") { Settings.Locks.Passcode = "Enabled" };
                Settings.Locks.Pattern = "Active";
                break;
            case "Passcode":
                if (Settings.Locks.Pincode == "Active") { Settings.Locks.Pincode = "Enabled" };
                if (Settings.Locks.Pattern == "Active") { Settings.Locks.Pattern = "Enabled" };
                if (Settings.Locks.Fingerprint == "Active") { Settings.Locks.Fingerprint = "Enabled" };
                Settings.Locks.Passcode = "Active";
                break;
        }

        fs.writeFile(fs.DocumentDirectoryPath + '/settings.json', JSON.stringify(Settings, null, 2))
            .then(() => alert(JSON.stringify(Settings, null, 2)))
            .catch((err) => alert(err.message));





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
                        {this.checkUserLocks(this.state.LockFingerprint, Icons.Fingerprint.filled, () => this.setUserLock("Fingerprint"))}
                        {this.checkUserLocks(this.state.LockPincode, Icons.Pincode.filled, () => this.setUserLock("Pincode"))}
                        {this.checkUserLocks(this.state.LockPattern, Icons.Pattern.filled, () => this.setUserLock("Pattern"))}
                        {this.checkUserLocks(this.state.LockPasscode, Icons.Passcode.filled, () => this.setUserLock("Passcode"))}
                    </View>
                </View>

                <View>
                    {this.loadUserLock(this.state.Lock)}
                </View>

                <Button onPress={() => { fs.unlink(fs.DocumentDirectoryPath + '/User.ID') }} mode={'contained'} >Sign out</Button>

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
