import React, { Component } from 'react';
import { View, Text } from 'react-native';

// 10-01
// Import the Slides component that we made in the "components" folder
import Slides from './../components/Slides';

// 10-01
// We define some dummy data to be displayed in the Welcome Screen
// This data will be passed to the Slides component to be displayed later
// This data certainly will be flexible
// If we want to change the welcome screen, just change (add or remove) this
//   array of text
const SLIDE_DATA = [
    { text: 'Welcome to the JobApp' },
    { text: 'Set your location, then swipe away' }
];

class WelcomeScreen extends Component {
    render() {
        return (
            // 10-01
            // Pass the data to the Slides component as a props
            <Slides data={SLIDE_DATA} />
        );
    }
}

export default WelcomeScreen;
