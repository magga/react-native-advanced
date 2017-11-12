import React from 'react';
import { StyleSheet, View } from 'react-native';

// 02-06
// Remove the Ball component (as we just use it for practicing purpose)
//   and change it with the Deck component
// import Ball from './src/Ball';
import Deck from './src/Deck';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
