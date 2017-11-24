import React from 'react';
import { View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Expo from 'expo';
import { Provider } from 'react-redux';

import store from './store';
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
      lazy: true,
      navigationOptions: {
        tabBarVisible: false
      },
      // 11-10
      // In Android, when the user swipe in the last slide, they can still
      //   swipe left and come to the Auth Screen from there
      // We can disabled that for Android with these configuration
      animationEnabled: false,
      swipeEnabled: false
    });

    return (
      <Provider store={store} >
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
