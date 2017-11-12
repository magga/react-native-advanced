import React, { Component } from 'react';
// 03-01
// Import the PanResponder component from React Native library to use it
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    
    // 03-01
    // In our app, we may have many different component that a user can touch
    // We can create multiple instance of PanResponder
    // So anytime we want to use a PanResponder, we have to create a new instance
    //   of it and configure and tell it what it's supposed to do or what 
    //   element it's supposed to be dealing with
    // Traditionally we set up these PanResponder inside of our component's constructor
    constructor(props) {
        super(props);

        const panResponder = PanResponder.create({

        });

        // 03-01
        // Notice that we won't update the panResponder anywhere inside our code
        // So there's no need to assign the panResponder as a state
        // We can just set it as a normal class variable like 
        //   this.panResponder = panResponder;
        this.state = { panResponder };
    }

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
