import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// 13-02
// Import the Swipe component to be used for displaying individual job
import Swipe from './../components/Swipe';

class DeckScreen extends Component {
    render() {
        return (
            <View>
                {/* 13-02 */}
                {/* For now, just place it inside the View */}
                {/* Next we'll add some props into the Swipe component */}
                <Swipe 
                    data={this.props.jobs}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);
