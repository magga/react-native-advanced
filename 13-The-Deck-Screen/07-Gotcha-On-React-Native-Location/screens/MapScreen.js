import React, { Component } from 'react';
import { View, Text } from 'react-native';
// 13-06
// Import Permission object from expo module
import { MapView, Permissions } from 'expo';
import { connect } from 'react-redux';
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
        keyword: '',
        // 13-06
        // Add permission state to determine whether the user have been granted us the
        //   Locaction permission to access the GPS
        locationPermission: false
    }

    // 13-06
    // When we test the Location feature (reverse geocoding) on the real device,
    //   it won't run until we get a permission from the user to access the GPS
    // To do that, we will use the Permission object from expo module to request 
    //   permission to user
    // We won't show the map until the Location permission is granted

    // askAsync will return true if the user have been granted us Location permission before
    // So we don't have to worry that the permission will be run everytime the app's loaded
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
          this.setState({ locationPermission: true });
        }
    }

    onRegionChangeComplete(region) {
        this.setState({ region });
    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, this.state.keyword, () => {
            this.props.navigation.navigate('deck');
        });
    }

    onTextChange = (text) => {
        this.setState({ keyword: text });
    }

    render() {
        // 13-06
        // Don't show the map if the user haven't granted the Location permission
        if (!this.state.locationPermission) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Please give permission to the Location access</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }} >
                <MapView 
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                />

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
    formInputContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.8)',
        top: 20,
        left: 40,
        right: 40
    }
};

export default connect(null, actions)(MapScreen);
