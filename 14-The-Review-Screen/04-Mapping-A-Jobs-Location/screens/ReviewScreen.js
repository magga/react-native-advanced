import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
// 14-04
// Import the MapView from expo to display the job's location
import { MapView } from 'expo';

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

    renderLikedJobs() {
        return this.props.likedJobs.map((job) => {
            const { 
                company, 
                formattedRelativeTime, 
                url,
                longitude,
                latitude
            } = job;

            // 14-04
            // Declare a helper object for the map's region
            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card key={job.jobkey}>
                    <View style={{ height: 200 }}>
                        {/* 14-04 */}
                        {/* Put the map inside the Card to display the job's location */}
                        {/* Notice that this MapView styling looked exactly the same that's */}
                        {/*   available on the card in the Deck Screen */}
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled
                            initialRegion={initialRegion}
                        >
                        </MapView>

                        <View style={styles.detailContainer}>
                            <Text style={styles.italic}>{company}</Text>
                            <Text style={styles.italic}>{formattedRelativeTime}</Text>
                        </View>

                        <Button
                            title='Apply Now'
                            backgroundColor='#03A9F4'
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

const styles = {
    detailContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italic: {
        fontStyle: 'italic'
    }
};

const mapStateToProps = (state) => {
    return { likedJobs: state.likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
