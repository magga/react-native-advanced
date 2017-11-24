import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
    // 12-02
    // We use the component level state to hold the value for the region
    // { for more information about the Region, see the corresponding slide }
    state = {
        // 12-02
        // We set the default region to Monas
        region: {
            longitude: 106.825586,
            latitude: -6.1746652,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <MapView 
                    style={{ flex: 1 }} 
                    // 12-02
                    // Set the region props of the MapView to the region that
                    //   we set in the state
                    region={this.state.region}
                />
            </View>
        );
    }
}

export default MapScreen;
