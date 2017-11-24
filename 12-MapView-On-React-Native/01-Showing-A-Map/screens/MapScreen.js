import React, { Component } from 'react';
import { View } from 'react-native';
// 12-01
// To show a map, we import the MapView from expo component
import { MapView } from 'expo';

class MapScreen extends Component {
    render() {
        return (
            // 12-01
            // Set the flex to 1 to cover all the available screen
            <View style={{ flex: 1 }} >
                {/* 12-01 */}
                {/* To display the map, simply put the MapView tag */}
                {/* Set flex to 1 to cover all the available screen */}
                <MapView style={{ flex: 1 }} />
            </View>
        );
    }
}

export default MapScreen;
