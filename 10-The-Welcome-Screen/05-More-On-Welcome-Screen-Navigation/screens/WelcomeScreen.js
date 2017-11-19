import React, { Component } from 'react';

import Slides from './../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to the JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        // 10-05
        // Whenever we render a Screen, we always have a "navigation" props
        // Like the Review Screen before, the navigation props contain "navigate"
        //   function to help use jumping from one screen to another
        // So because it's treated as a props, we can use this.props.navigation.navigate
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            // 10-05
            // Pass that function as a props to the Slides component
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;
