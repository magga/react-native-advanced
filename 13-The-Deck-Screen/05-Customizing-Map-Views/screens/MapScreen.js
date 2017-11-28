import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
        locationPermission: false
    }

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
        // 12-12
        // We want to whenever the user click the search button and successfully find the 
        //   list of job, we navigate them to the Deck screen
        // But the problem is that the navigate capability is only available in the 
        //   component's props
        // We want to navigate it in the actions file, but the actions don't have the navigation
        // The solution is that we pass a callback function that contains the navigation code
        //   and then have the actions to call it from there wherever the fetch success
        console.log('MASUK');
        this.props.fetchJobs(this.state.region, this.state.keyword, () => {
            console.log('MASUK2');
            this.props.navigation.navigate('deck');
        });
    }

    onTextChange = (text) => {
        this.setState({ keyword: text });
    }

    render() {
        if (!this.state.locationPermission) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
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
