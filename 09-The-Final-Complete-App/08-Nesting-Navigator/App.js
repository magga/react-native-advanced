import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
// 09-08
// Import more screens to show in the tab
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      // 09-08
      // We can nested a Navigator inside another Navigator
      // In this case we nest a Tab Navigator inside another Tab Navigator
      // By nesting, it means that when user click a tab, it will show another tab above it
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen }
        }, {
          tabBarPosition: 'bottom'
        })
      }
    }, {
      tabBarPosition: 'bottom',
      // 09-08
      // To make a nested tab bar worked on Android, we have to add a "lazy" configuration to "true"
      // This "lazy" means that the tab's content will be loaded when the user clicks on that tab
      // The default setting (false) is that when this App.js component is being loaded, ALL the tab 
      //   inside it will be loaded too
      lazy: true
    });

    return (
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
