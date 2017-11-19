import React from 'react';
import { View } from 'react-native';
// 09-09
// To use Stack, we import the StackNavigator from 'react-navigation' module
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
// 09-09
// Import more screens to show in the stack
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
          // 09-09
          // We can nested another Navigator inside other Navigator
          // To display a "Review" and "Setting" screens, those 2 lined up as a stack
          //   navigation (see the image from previous slide)
          // To nest a Stack Navigator inside a Tab Navigator, simply to the
          //   same as before
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
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
