import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Deck extends Component {
    // 02-08
    // We make a helper method to render the data that being passed to the Deck
    // In this helper method, we map the data that comes
    // In each iteration, we called the renderCard() props to tell how we want
    //   to display that card
    // Because we use the props renderCard() as the styling function, it means
    //   that we use the App.js to tell us how we display the content of the deck,
    // We don't style it in the Deck component itself
    renderCards() {
        return this.props.data.map((item) => {
            return this.props.renderCard(item);
        });
    }

    render() {
        return (
            <View>
                {/* 02-08 */}
                {/* Call the helper method to render the card */}
                {this.renderCards()}
            </View>
        );
    }
}

export default Deck;
