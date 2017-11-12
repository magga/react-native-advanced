import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    constructor(props) {
        super(props);
    
        // 03-04
        // We don't want to set the default ValueXY (ex: ValueXY(0, 0)) as we don't
        //   want to make any assumption about where the Card is on the screen
        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                // 03-04
                // Whenever the user presses down the screen and starts to drag around,
                //   we want to update the "position" object
                // We don't want the Animated.spring to handle this (like we do with the Ball.js)
                //   as the Animated.spring move something in some interval time, but
                //   the onPanResponderMove triggered almost immediately after the user drag around
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: () => {}
        });
    
        // 03-04
        // Add the "position" to the state so that we can use that on other part of the code
        this.state = { panResponder, position };
    }

    renderCards() {
        return this.props.data.map((item) => {
            return this.props.renderCard(item);
        });
    }

    render() {
        return (
            // 03-04
            // Change the View to the Animated.View
            // Pass the "position" as the style props
            <Animated.View 
                style={this.state.position.getLayout()}
                {...this.state.panResponder.panHandlers}
            >
                {this.renderCards()}
            </Animated.View>
        );
    }
}

export default Deck;
