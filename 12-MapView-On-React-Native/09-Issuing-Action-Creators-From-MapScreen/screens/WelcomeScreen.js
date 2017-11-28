import React, { Component } from 'react';
// 11-10
// Install lodash module to use it as a helper
import _ from 'lodash';
// 11-10
// Import View and ActivityIndicator to be shown as a loading screen
// Import AsyncStorage to know whether we should display the WelcomeScreen or not
import { View, ActivityIndicator, AsyncStorage } from 'react-native';

import Slides from './../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to the JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    state = { token: null };

    async componentWillMount() {
        // 11-10
        // When the user have been logged in before, we don't want to
        //   show them the Welcome Screen
        // Instead we should redirect them to the Main screen instead
        // To know that, we can check the token that have been saved in
        //   the Async Storage

        // But because the AsyncStorage is an asynchronous function, there
        //   will be a small fracture of time when it still fetching
        // We don't want to show the Welcome Screen in that small amount
        //   of time
        // Instad we want to show the kind of "loading screen" when the
        //   AsyncStorage is fetching

        // To do that, we can create an Action Creator to read the token
        // OR we can use the component level state
        // In this case we'll use the component level state to hold
        //   the status

        // null for when the Async Storage is still fetching token data
        // true when there is a token (we should navigate them to the map screen)
        // false when the user never logged in before
        const token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.props.navigation.navigate('map');
        } else {
            this.setState({ token: false });
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        // 11-10
        // If the AsyncStorage is still fetching data (token === null),
        //   we display the "loading screen" instead
        if (_.isNull(this.state.token)) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }

        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;
