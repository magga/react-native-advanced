import React from 'react';
// 09-11
// Add Platform from 'react-native' module to get some platform-specific code
import { View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
// 09-11
// Add Expo module to get some constant number for Android's Navigation Bar's height
import Expo from 'expo';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              setting: { screen: SettingScreen }
            })
          }
        }, {
          tabBarPosition: 'bottom'
        })
      }
    }, {
      tabBarPosition: 'bottom',
      lazy: true
    });

    return (
      // 09-11
      // By default, for Android, the app will take a full screen and overlapped with Android's Navigation Bar
      // So we add a little styling to our app that says if we run on Android, set some padding
      //   so it won't overlapped
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}
