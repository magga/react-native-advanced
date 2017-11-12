import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
    componentWillMount() {
        // 02-03
        // This variable here holds the current position of the ball
        //   (answer for question #1 where the item is at any point in time)
        //   (see the corresponding image for more detail)
        this.position = new Animated.ValueXY(0, 0);
        // Spring is being used to change the current position
        // It takes 2 parameters
        // One for the current position, the other for where the element is moving to
        // The Spring function is cahnging the values of the position over some amount of time
        //   In this case we didn't specify the time, it use the default value of 1 second
        Animated.spring(this.position, {
            // The Animated value eventually got changed from 0, 0 to 200, 500
            toValue: { x: 200, y: 500 }
        }).start();
    }

    render() {
        return (
            // 02-03
            // Animated.View takes in a "position" to tell the Animated module what
            //   view that we want to animated
            // We can nest as many elements inside of the ANimated.View as we wish
            
            // Animated.View is different than the View that we usually use
            // The Animated.View knows how to receive some information about an animation
            //   and then play that animation on the screen
            // The View component just knows how to lay something out on the screen

            // To tell the Animated.View how we want to change over time, we pass properties
            //   to the "style" props
            // The position.getLayout() contains some information to tell the Animated.View
            //   how it should be changing
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        );
    }
}

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
};

export default Ball;
