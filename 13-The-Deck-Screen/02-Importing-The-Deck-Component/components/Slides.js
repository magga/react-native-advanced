import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button 
                    title="I'm Ready!"
                    raised
                    // 10-05
                    // We can add custom style to the react-native-element's Button
                    // We pass it as "buttonStyle" props, not "style"
                    buttonStyle={styles.buttonStyle}
                    // 10-05
                    // Wire a props from Welcome Screen to be added as a callback form when
                    //   the user press the Button
                    onPress={this.props.onComplete}
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
    },
    // 10-05
    // Create a custom style for Button
    buttonStyle: {
        backgroundColor: '#0288D1'
    }
};

export default Slides;
