import React from 'react';
import { View } from 'react-native';
// 09-07
// To create a tabbed navigation, we use TabNavigator from 'react-navigation' module
import { TabNavigator } from 'react-navigation';

// 09-07
// Import the screens that we're going to show in the tab
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    // 09-07
    // To make a tab, we create a variable that returned from TabNavigator
    // It received 2 objects as parameter
    // The first object contains all the screen that will be displayed inside the tab
    // The second object contains configuration for the tab
    // For more informatin, visit 
    //   --> https://reactnavigation.org/docs/navigators/tab
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen }
    }, {
      tabBarPosition: 'bottom'
    });

    return (
      // 09-07
      // To display the TabNavigator, it have to be wrapped inside a View that has flex : 1
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    );
  }
}
