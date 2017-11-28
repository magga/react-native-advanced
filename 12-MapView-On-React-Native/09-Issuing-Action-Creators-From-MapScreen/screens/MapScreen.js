import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
// 12-09
// Import the connect method to wire the actions to the component
import { connect } from 'react-redux';
// 12-09
// Import a button
import { Button } from 'react-native-elements';

// 12-09
// Import the actions to be called to fetch the Indeed Jobs API
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

    onRegionChangeComplete(region) {
        this.setState({ region });
    }

    // 12-09
    // Create the helper method for button press
    // When the button pressed, we call the action creator to search available jobs
    //   in the region that the user set
    onButtonPress = () => {
        this.props.fetchJobs(this.state.region);
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <MapView 
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                />

                {/* 12-09 */}
                {/* Create a Button that floats above the tab bar and slightly inside */}
                {/*   the map screen */}
                {/* When the user clicks this button, it'll trigger the action creator */}
                {/*   that call the Indeed Jobs API */}
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

// 12-09
// Add style to the button
const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    }
};

// 12-09
// Connect the actions
export default connect(null, actions)(MapScreen);
