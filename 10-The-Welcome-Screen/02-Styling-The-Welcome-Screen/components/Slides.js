// 10-01
// Create Slides.js component inside a new "components" folder
//   to display each message/data from the Welcome Screen

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class Slides extends Component {
    // 10-02
    // Here we create a helper method to render each data as a single Slide (view)
    renderSlides() {
        return this.props.data.map((slide) => {
            return (
                // 10-02
                // WARNING
                // In React Native version 0.50.0 (Expo SDK 23.0.0) there's a bug that
                //   causing a problem for ScrollView
                // If we set a ScrollView as horizontal, we can't use a "key" props to
                //   the View that the ScrollView contains
                // So in this case we don't add a "key" props to the View as it will causing an error
                // It will create a warning instead, but we can ignore it for now until the bug is fixed
                <View style={styles.slideStyle}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                </View>
            );
        });
    }
    render() {
        return (
            // 10-02
            // To create a Slides, we don't have to make a custom component that can be scrolled
            // We can use the ScrollView with props "horizontal"
            // It means instead of scrolling the content vertically (top-bottom) like usual,
            //   we can set it to scroll horizontally instead (right-left) by setting the
            //   "horizontal" props to true
            <ScrollView
                horizontal
                style={{ flex: 1 }}
            >
                {/* 10-02 */}
                {/* To render each data in the Slides as a single View, we can use a helper method */}
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

// 10-02
// Create a styles object to help styling the components inside the Slides
const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30
    }
};

export default Slides;
