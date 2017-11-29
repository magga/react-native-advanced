import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './../actions';

class AuthScreen extends Component {
    // 11-09
    // When the AuthScreen is mounted for the first time, we check if
    //   we have a token inside our AsyncStorage by calling a reducer
    componentDidMount() {
        this.props.facebookLogin();
    }

    // 11-09
    // If, by any mean, we get a token in the state, we then redirect
    //   user to the "map" screen
    // componentWillReceiveProps here will be called wherever there's
    //   a change in our props
    // Because we connect the state to our props with a "connect" function,
    //   everytime the state changed, the props will also be changed, and so
    //   the componentWillReceiveProps will be called/triggered too
    componentWillReceiveProps(nextProps) {
        if (nextProps.token) {
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return (
            // 11-09
            // Clear up the view as we don't want to display anything in AuthScreen
            <View />
        );
    }
}

// 11-09
// We want to read the token from state, so we create a mapStateToProps
//   and get the token property from auth object
const mapStateToProps = ({ auth }) => {
    return {
        token: auth.token
    };
};

// 11-09
// Connect the mapStateToProps to the AuthScreen using connect function
//   so that the token can be read from the AuthScreen
export default connect(mapStateToProps, actions)(AuthScreen);
