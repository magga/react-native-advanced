import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

import Swipe from './../components/Swipe';

class DeckScreen extends Component {
    renderCard(job) {
        // 13-05
        // To display the job's location on the map, we can use the initialRegion props of the map view
        // But it takes a value of an object that contains latitude, longitude, latitudeDelta, and longitudeDelta
        // To do that, we can create a helper object to be passed to the MapView's props
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (
            <Card title={job.jobtitle}>
                {/* 13-05 */}
                {/* We don't want the map to takes an entire height of the screen */}
                <View style={{ height: 300 }}>
                    {/* 13-05 */}
                    {/* Add a map from the job's latitude and longitude to be shown as a  */}
                    {/*   location for that particular job on the map */}
                    <MapView
                        // 13-05
                        // By default, when we drag inside the map, the location (map) inside the
                        //   map will be scrolled
                        // We don't want this as we want the map as a part of the card
                        // That means when the user drag the map, the component that will be dragged
                        //   is the entire card itself, not the location inside the map
                        // We can disable the map by passing the "scrollEnabled" props as false
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        // 13-05
                        // In one API search, we can get, like, 10 jobs to be displayed at once
                        // Each job will have it's own map
                        // The performance of rendering 10 maps at the same time will be poorly
                        // We can avoid this by setting the cacheEnabled as true
                        // It will render the map not as a map itself, but as a static image
                        cacheEnabled
                        // 13-05
                        // Show the location of the job
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

    // 13-05
    // Create a helper method that will be called when no more card to be rendered
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
                    // 13-05
                    // Pass the helper function to the Swipe component as a props
                    renderNoMoreCards={this.renderNoMoreCards}
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
