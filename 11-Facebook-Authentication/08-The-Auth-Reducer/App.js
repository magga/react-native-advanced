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
      // 11-07
      // We don't want to show the tab bar in the Welcome Screen and Auth Screen
      // So we can hide it using the "navigationOptions" property and set the tabBarVisible
      //   property to false
      navigationOptions: {
        tabBarVisible: false
      }
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
