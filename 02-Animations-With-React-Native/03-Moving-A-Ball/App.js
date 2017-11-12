import React from 'react';
import { StyleSheet, View } from 'react-native';

// 02-02
// Import the ball component and put it inside the View
import Ball from './src/Ball';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // 02-03
    // Delete this 2 properties to make the ball sit on the left-top of the screen
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
