import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ReviewScreen extends Component {
    // 09-10
    // This is the magic of Class Properties
    // The navigationOptions is a reserved keyword that will be use whenever this
    //   ReviewScreen class is called
    // In other words, if we define the "navigationOptions" object on ANY component,
    //   whenever navigator's about to show that component, it will use the configuration
    //   that is defined here to customize the route
    static navigationOptions = {

    }

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
