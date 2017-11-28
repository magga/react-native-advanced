import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

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
                    // 13-08
                    // Set the ID for the map function in the Swipe component as
                    //   the jobkey property
                    // This'll remove the warning when we see the deck screen
                    keyProp='jobkey'
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

export default connect(mapStateToProps)(DeckScreen);
