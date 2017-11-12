import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

import Deck from './src/Deck';
import DATA from './src/data/Data';

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
          You can customize the Card even further!
        </Text>
        <Button 
          icon={{ name: 'code' }}
          backgroundColor='#03A9F4'
          title='View Now!'
        />
      </Card>
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
