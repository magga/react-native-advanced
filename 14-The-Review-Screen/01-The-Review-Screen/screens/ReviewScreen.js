import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
// 14-01
// Import the connect function from react-redux module
import { connect } from 'react-redux';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerRight: (
                <Button 
                    title='Setting' 
                    onPress={() => navigation.navigate('setting')} 
                    backgroundColor='rgba(0,0,0,0)'
                    color='rgba(0, 122, 255, 1)'
                />
            )
        };
    }

    componentWillMount() {
        this.navigate = this.props.navigation.navigate();
    }

    render() {
        console.log(this.props.likedJobs.length);
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

// 14-01
// Get the likedJobs state from reducer by creating the mapStateToProps
const mapStateToProps = (state) => {
    return { likedJobs: state.likedJobs };
};

// 14-01
// Connect the mapStateToProps so that the likedJobs can be read inside the component
export default connect(mapStateToProps)(ReviewScreen);
