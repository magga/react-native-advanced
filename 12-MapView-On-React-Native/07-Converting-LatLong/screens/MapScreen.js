import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import * as actions from './../actions/job_actions';

class MapScreen extends Component {
    state = {
        region: {
            longitude: 106.825586,
            latitude: -6.1746652,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    // 12-04
    // Whenever the user drag the map, we want to save the region (after the user drag)
    //   to our state
    // We create a helper method to do that
    onRegionChangeComplete(region) {
        this.setState({ region });
        this.props.fetchJobs(region);
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <MapView 
                    style={{ flex: 1 }}
                    region={this.state.region}
                    // 12-04
                    // This props will be triggered whenever the user drag the map
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                />
            </View>
        );
    }
}

export default connect(null, actions)(MapScreen);
