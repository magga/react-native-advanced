import React, { Component } from 'react';
// 13-04
// Import Text to be shown in the card at the deck screen
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// 13-04
// Import map, card, and button to be shown in the card at the deck screen
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

import Swipe from './../components/Swipe';

class DeckScreen extends Component {
    // 13-04
    // Create a helper function that receive a single job and return some amount
    //   of JSX that will be shown as a card on the screen
    renderCard(job) {
        return (
            <Card title={job.jobtitle}>
                <View style={styles.detailContainer}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>

                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
                </Text>
            </Card>
        );
    }

    render() {
        return (
            <View>
                <Swipe 
                    data={this.props.jobs}
                    // 13-04
                    // Pass the helper function as props to the Swipe component
                    renderCards={this.renderCard}
                />
            </View>
        );
    }
}

// 13-04
// Add some styling
const styles = {
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
};

const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.results };
};

export default connect(mapStateToProps)(DeckScreen);
