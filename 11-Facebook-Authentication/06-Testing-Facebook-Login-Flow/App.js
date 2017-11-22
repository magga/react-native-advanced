import React from 'react';
import { View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Expo from 'expo';
// 11-02
// Import a Provider to create a store so that other component can
//   get the application state
import { Provider } from 'react-redux';

// 11-02
// Here we create a store on another file
// We don't define the store in the App.js as there's so many 
//   code here already
// The store's code will be huge, we don't want to mess up the code in App.js
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
      lazy: true
    });

    return (
      // 11-02
      // Wrapp all of our components with a Provider tag so that
      //   those elements can read the application's state with a connect function
      <Provider store={store} >
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
