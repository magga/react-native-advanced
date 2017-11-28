import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
// 13-08
// Import the actions to be passed to the component so that the component
//   can call it
import * as actions from './../actions';

import Swipe from './../components/Swipe';

class DeckScreen extends Component {
    renderCard(job) {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (
            <Card title={job.jobtitle}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled
                        initialRegion={initialRegion}
                    >

                    </MapView>
                </View>

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

    renderNoMoreCards() {
        return (
            <Card title='No More Jobs'>
                
            </Card>
        );
    }

    render() {
        console.log(this.props.jobs);
        return (
            <View>
                <Swipe 
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    keyProp='jobkey'
                    // 13-09
                    // Whenever the user swipe right on a job card, we'll call an action
                    //   creator to save that job
                    // We haven't yet create the likeJob action creator inside the job_actions
                    onSwipeRight={(job) => this.props.likeJob(job)}
                />
            </View>
        );
    }
}

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

// 13-08
// Connect the actions to the component by using the connect() function
export default connect(mapStateToProps, actions)(DeckScreen);
