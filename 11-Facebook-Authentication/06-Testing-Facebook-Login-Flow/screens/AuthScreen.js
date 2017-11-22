import React, { Component } from 'react';
import { View, Text } from 'react-native';
// 11-06
// Import the connect method from react-redux module to help us
//   connect the actions and state to the component
import { connect } from 'react-redux';

// 11-06
// Import the action creator index file
import * as actions from './../actions';

// 11-06
// The purpose of the AuthScreen is just to display the facebook's modal screen
// So essentially this AuthScreen don't do or display anything other than
//   calling the facebookLogin action creator
// We don't even need to render anything, but we'll leave it as it is for now
class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
    }

    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}

// 11-06
// Connect the AuthScreen component with action creator so we can call
//   the action creator inside our AuthScreen component
export default connect(null, actions)(AuthScreen);
