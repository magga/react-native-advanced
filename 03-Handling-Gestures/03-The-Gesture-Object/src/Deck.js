import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    constructor(props) {
        super(props);
    
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                console.log(event);
                console.log(gesture);
            },
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
            // 03-03
            // In the future, we want each of the Cards to have their own panHandler
            //   so that if we move one Card, the other Card doesn't move along too
            // But in this case we want to see the "gesture" parameter first, so it's
            //   okay to put the panHandler here for now

            // The panHandlers property right here is an object that has a bunch of 
            //   different callbacks that help intercepts presses from a user
            // By using the ... syntax, we're spreading all those different properties
            //   over the View
            // So essentially we're just taking all the different callbacks that exist
            //   on this panHandlers object and passing them off to the View component
            // That's how we tie a panResponder to an actual element

            // To debug it, you can use the Google Chrome Remote Debugger
            <View {...this.state.panResponder.panHandlers}>
                {this.renderCards()}
            </View>
        );
    }
}

export default Deck;
