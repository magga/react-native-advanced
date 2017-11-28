import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
// 12-10
// Import a FormInput
import { Button, FormInput } from 'react-native-elements';

import * as actions from './../actions/job_actions';

class MapScreen extends Component {
    state = {
        region: {
            longitude: 106.825586,
            latitude: -6.1746652,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        },
        // 12-10
        // Add keyword state to specify the jobs that the user want to search
        keyword: ''
    }

    onRegionChangeComplete(region) {
        this.setState({ region });
    }

    onButtonPress = () => {
        // 12-10
        // Pass the keyword to the action creator
        // We'll modify the action creator so it'll take the keyword as a query
        this.props.fetchJobs(this.state.region, this.state.keyword);
    }

    // 12-10
    // Add a helper method to read the keyword that the user type inside the FormInput
    onTextChange = (text) => {
        this.setState({ keyword: text });
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <MapView 
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                />

                {/* 12-10 */}
                {/* Add FormInput on top of the map */}
                {/* Give it some styles */}
                <View style={styles.formInputContainer}>
                    <FormInput
                        onChangeText={this.onTextChange}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button 
                        large
                        title='Search This Area'
                        backgroundColor='#009688'
                        icon={{ name: 'search' }}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },
    // 12-10
    // Give the FormInput some styles
    formInputContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.8)',
        top: 20,
        left: 40,
        right: 40
    }
};

export default connect(null, actions)(MapScreen);
