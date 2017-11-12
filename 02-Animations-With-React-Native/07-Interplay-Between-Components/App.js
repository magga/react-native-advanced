import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Deck from './src/Deck';
// 02-07
// Get some dummy data for the Deck component
import DATA from './src/data/Data';

export default class App extends React.Component {
  // 02-07
  // renderCard() will be called many times as the Deck component is rendered
  // It will be called one time for each element that's inside of the Data array
  // So right now, given that we have 8 items inside the Data array, renderCard()
  //   would expected to be called 8 times
  // Once with each object in the array

  // We'll receive that object as it comes in as "item"
  renderCard(item) {
    // 02-07
    // renderCard() will have to return some JSX that will be showed on the screen
    //   for each individual card
    return (
      <Text>{item.text}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 02-07 */}
        {/* Pass the renderCard() and the DATA array down into the Deck component as a props */}
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
        />
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
