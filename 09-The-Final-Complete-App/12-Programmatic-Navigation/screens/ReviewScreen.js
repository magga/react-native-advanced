import React, { Component } from 'react';
import { View, Text } from 'react-native';
// 09-12
// To display a Button, we use a help from 'react-native-elements' module
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    // 09-12
    // Instead of defining navigationOptions as an object, we can change it as a function that
    //   RETURN an object
    // The reason we do this is because we want to get a props that contains all of the 
    //   navigation option that's being passed to this Review Screen
    // This props called "navigation" contains some property/function that will be useful for us
    // One for example is the "navigate" function that allow us to navigate to the screen
    //   that we've defined in the App.js
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerTitleStyle: {
                alignSelf: 'center'
            },
            // 09-12
            // Whenever the user press the button, we'll redirect them to the Setting Screen
            //   using the navigate() function from the navigation props
            headerRight: <Button title='Setting' onPress={() => navigation.navigate('setting')} />
        };
    }

    componentWillMount() {
        this.navigate = this.props.navigation.navigate();
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
