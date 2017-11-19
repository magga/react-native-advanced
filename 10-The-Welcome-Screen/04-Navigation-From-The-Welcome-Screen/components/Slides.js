import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
// 10-04
// We'll add a Button in the last Slide
// To do that we can use a Button from 'react-native-elements' module
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    // 10-04
    // We create a helper method to determine if whether we're on the last Slide
    // If true, then we return a Button that will navigate us to the next screen
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button 
                    title="I'm Ready!"
                    // 10-04
                    // raised props is a props that tell the Button to use a default
                    //   style that looks like a button that floats (have a shadow under)
                    raised
                />
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View 
                    style={[styles.slideStyle, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {/* 10-04 */}
                    {/* We want to add a Button that will take us to the next screen */}
                    {/*   in the last Slide of our Welcome Screen */}
                    {/* To do that, we can use a helper method to determine if we're now in the last screen */}
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
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
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
};

export default Slides;
