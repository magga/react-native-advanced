import React, { Component } from 'react';
// 10-03
// We want that each Slide that we have occupy exactly one size of the area
// It means that the Slide have to have a width that's the same as the device's width
// To get the device's width, we can use the Dimensions object from react-native mdule
import { View, Text, ScrollView, Dimensions } from 'react-native';

// 10-03
// We get the device's width by getting it from Dimension's width
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides() {
        return this.props.data.map((slide) => {
            return (
                // 10-03
                // Add some more styling for the View and Text
                // To get a nice and customized background color for the Slide, we can get
                //   the color from the props
                // That means that we have to set the color from the data from the 
                //   Welcome Screen
                <View 
                    style={[styles.slideStyle, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                // 10-03
                // To get a nice feeling when we slide over one Slide to another Slide, we can
                //   add the pageEnabled props
                // This props is used to prevent the user to stuck in between 2 slides when
                //   they try to swipe from one Slide to another Slide
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // 10-03
        // Set the Slide's width to the width of the device
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        // 10-03
        // Set the text alignment to center and the text to white
        textAlign: 'center',
        color: 'white'
    }
};

export default Slides;
