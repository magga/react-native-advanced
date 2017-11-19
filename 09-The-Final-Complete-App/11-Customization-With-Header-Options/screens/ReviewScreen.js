import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ReviewScreen extends Component {
    static navigationOptions = {
        // 09-11
        // Title property will change the header's title and the tab's title
        title: 'Review Jobs',
        // Header Title Style as the name imply will change the behavior of title
        //   such as it's alignment
        headerTitleStyle: {
            alignSelf: 'center'
        },
        // Header Right will add a view to the right side of the header
        // It thakes a JSX here, so we can add, for example, a text or button or anything
        headerRight: <Text style={{ paddingRight: 10 }}>Go Right</Text>
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
