// 09-06
// We make one .js file for every screen that we have
// For now we just put some text on the screen to show us which
//   screen we're currently in

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingScreen extends Component {
    render() {
        return (
            <View>
                <Text>SettingScreen</Text>
                <Text>SettingScreen</Text>
                <Text>SettingScreen</Text>
            </View>
        );
    }
}

export default SettingScreen;
