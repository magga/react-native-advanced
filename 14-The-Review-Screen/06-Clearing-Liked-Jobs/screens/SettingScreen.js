import React, { Component } from 'react';
import { View } from 'react-native';
// 14-06
// Import the connect method
import { connect } from 'react-redux';
// 14-06
// Import Button from react-native-elements
import { Button } from 'react-native-elements';

// 14-06
// Import all the actions to be used inside the component
import * as actions from './../actions';

class SettingScreen extends Component {
    render() {
        return (
            <View>
                {/* 14-06 */}
                {/* Display a button */}
                {/* When the button pressed, clear all the liked jobs by calling */}
                {/*   the clearLikedJobs action creator */}
                <Button
                    title='Reset All Liked Jobs'
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor='#F44336'
                    buttonStyle={{ marginTop: 10 }}
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        );
    }
}

// 14-06
// Connect the actions with component using the connect method
export default connect(null, actions)(SettingScreen);
