import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    constructor(props) {
        super(props);
    
        const panResponder = PanResponder.create({
            // 03-02
            // This function is executed any time a user taps on the screen
            // If we return "true" from this function, it means that we want this instance
            //   of the PanResponder to be responsible for the user pressing on the screen
            // It's value is a function (not a simple true/false value) so that we can put
            //   some code to decide whether or not we want this PanResponder to be
            //   responsible for the gesture that's occuring from the user
            onStartShouldSetPanResponder: () => true,
            // This function is called any time that the user starts to drag their finger
            //   on the screen
            // This function wil be called many time as the user drags something on the screen
        
            // This function takes 2 parameters
            // The "event" parameter is an object that has some amount of information that 
            //   describes what element was actually pressed down by the user
            // The "gesture" parameter has a bunch of information about what the user is doing
            //   with their finger on the screen
            // It'll have some information about what pixel value the user is pressign down on
            // It also have an information about how quickly the user moves their finger
            //   around on the screen
            onPanResponderMove: (event, gesture) => {
                console.log(`event : ${event}`);
                console.log(`gesture : ${gesture}`);
            },
            // This function is called any time a user presses down something, hold or drag it,
            //   and then release it
            // The moment it being released, this function is called
            // This function is usually a place to do some finalize callback
            onPanResponderRelease: () => {}
        });
    
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
