import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// 02-08
// Import the react-native-elements module
// Check out the documentation to see the full feature of react-native-elements
import { Card, Button } from 'react-native-elements';

import Deck from './src/Deck';
import DATA from './src/data/Data';

export default class App extends React.Component {
  renderCard(item) {
    // 02-08
    // To handle all the styling, we're not going to build from the scratch
    // Instead we're going to use a pre-existing component library that's going
    //   to save us a ton of time throughout this course when it comes to styling
    // The component library that we're going to use is called "react-native-elements"
    //   https://github.com/react-native-training/react-native-elements
    return (
      // 02-08
      // Visit the documentation to know this React Native Element's Card's props
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
